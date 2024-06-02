import {useState} from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { logger } from '../../log/pino';
const LoginForm = () => {
  const signIn = useSignIn();
  const [formData, setFormData] = useState({email: '', password: ''})
  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST', 
      data: formData,
    })
    .then((res) => {
      if (res.status === 200) {
        if(signIn({
          auth: {
            token: res.data.token,
            type: 'Bearer'
          },
          refresh: res.data.refreshToken,
          userState: res.data.authUserState
        })) {/**  Handle or Redirect if using refreshtoken */} else {
        logger.error('Auth Error...').message = `Something went wrong while user attempted to sign in.`     
      }
    }
  })
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
        id="email"
        name="email"
        type="email" 
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        id="password"
        name="password" 
        type="password" 
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
    </form>
  )
}

export {LoginForm};