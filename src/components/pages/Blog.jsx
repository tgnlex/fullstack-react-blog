import {useCallback, useEffect, useState} from 'react';
import { Feed } from '../components/blog/forms/Feed';
import { BlogMenu } from '../blog/Menu';
import { Loading } from '../Loading'
import { fetchAllPosts } from '../../api/getPosts';
function Blog() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPosts = useCallback(() => {
    fetchAllPosts(setLoading, setPosts)
  }, []);
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    }
    getPosts();
  }, [getPosts])
  if (loading) return <Loading />;
  return (
    <>
    <header id="blog-header">
      <BlogMenu loggedIn={loggedIn} />
    </header>
    <main id="blog">
      <h1>Blog</h1>
      <Feed posts={posts} />
    </main>
    </>
  )
}

export default Blog