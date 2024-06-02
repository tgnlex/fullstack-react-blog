import { Link } from "react-router-dom";
const Menu = (loggedIn) => { 
return (
<nav className="blogbar">
  <menu id="blog-menu">
    <Link to="/blog"><h2>Feed</h2></Link>
    <div id="conditonal-group">
    {loggedIn ? (
      <Link to="/blog/post/new"><h2>New Post</h2></Link>
    ) : (
      <>
        <Link to="/auth/login"><h2>Login</h2></Link>
        <Link to="/auth/register"><h2>Register</h2></Link> 
      </>
    )}
    </div>
  </menu>
</nav>
)
}
export {Menu};