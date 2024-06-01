import {Link} from 'react-router-dom';
const Menu = (children?: JSX.Element) => {
  return (
    <nav id="sidebar">
      <menu id="menu">
        <Link id="home" to="/" className="link">
          <h2>Home</h2>
        </Link>
        <Link id="blog" to="/blog" className="link">
          <h2>Blog</h2>
        </Link>
        <div id="children">
          {children}
        </div>
      </menu>
    </nav>
  )
}

export  {Menu};