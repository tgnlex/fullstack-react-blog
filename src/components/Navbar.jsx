import {Link} from 'react-router-dom';
const Menu = () => {
  return (
    <nav id="sidebar">
      <menu id="menu">
        <Link id="home" to="/" className="link">
          <h2>Home</h2>
        </Link>
        <Link id="blog" to="/blog" className="link">
          <h2>Blog</h2>
        </Link>
      </menu>
    </nav>
  )
}

export  {Menu};