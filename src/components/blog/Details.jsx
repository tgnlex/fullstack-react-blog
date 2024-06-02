import { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Reactions } from "./Reactions";
import { Loading } from "../Loading";
import { fetchPostDetails } from "../../api/getDetails";

const Details = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  
  const fetchDetails = useCallback(() => {
    fetchPostDetails(slug, setLoading, setPost)
  }, [slug]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (loading) return <Loading />;
  return (
    <div id="details">
      <header id="details-header">
        <h1 id="heading">{post.title}</h1>
        <div>
          <p id="date">Posted on {post.date}</p>
        </div>
        <Reactions slug={slug} />
      </header>
      <main id="details-main">
        {post.content}
      </main>
    </div>
  )
}
 
export {Details};