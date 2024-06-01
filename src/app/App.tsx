import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import '../style/App.css'
import AuthProvider from 'react-auth-kit';
import {cookieStore} from '../auth/store.jsx';
function App() {

  return (
    <AuthProvider store={cookieStore}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />}/>
       {/**  <Route path="/login" element={} /> */}
       {/**  <Route path="/post/:slug" element={} />*/}
        </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
