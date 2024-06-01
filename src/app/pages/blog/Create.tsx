//mport { useNavigate } from "react-router-dom";
import { PostForm } from "./PostForm";
const Create = () => {
 // const navigate = useNavigate();
  return (
    <>
      <main id="create">
        <h2 id="heading">Create new post</h2>
        <PostForm />
      </main>
    </>
  )
};
export {Create};