import { Link } from "react-router-dom";
function Feed(posts) {

  return (    
    <main id="feed">
      <h2 id="heading">Latest Posts</h2>
      <div id="list">
        {posts?.map((post) => (
          <Link 
            key={post.id}   
            to={`/blog/post/${post.slug}`} 
            className="post"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  )
}

export {Feed};