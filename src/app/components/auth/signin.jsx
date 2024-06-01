import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { logger } from '../../../log/pino';
const SignInComponent = () => {
  const signIn = useSignIn();

  const onSubmit = () => {
    e.preventDefault();
    fetch('POST', '/api/auth/login')
    if (signIn({
      auth: {
        token: 'ey....mA', 
        type: 'Bearer'
      }, 
      refresh: 'ey....A',
      userState: {
        name: 'React User', 
        uid: '',
      }
    })) {
      // Handle or Redirect 
    } else {
      logger.error('Auth Error...').message = `Something went wrong while user attempted to sign in.`     
    }
  }
  return (

  )
}

export {onSubmit};