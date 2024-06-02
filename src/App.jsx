import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home.js';
import Blog from './components/pages/Blog.jsx';
import Create from './components/pages/Create.jsx'
import Login from './components/pages/Login.jsx'
import AuthProvider, {RequireAuth} from 'react-auth-kit';
import {cookieStore} from './auth/store.jsx';
import '../style/App.css';
function Protected() {
  return (<RequireAuth fallbackPath={'/login'}><Create/></RequireAuth>)
}
function App() {
 
  return (
    <AuthProvider store={cookieStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog />}/>        
          <Route path="/blog/create" element={<Protected />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
