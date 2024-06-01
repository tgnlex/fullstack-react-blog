import createStore from 'react-auth-kit/createStore';

const cookieStore = createStore({
  authName: '_auth', 
  authType: 'cookie', 
  cookieDomain: window.location.hostname, 
  cookieSecure: window.location.protocol === 'https',
});

export {cookieStore};