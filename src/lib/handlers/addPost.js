import { addPost } from '../../api/addPost'; 
import {formatDate} from '../handlers/addPost';
const handleAddPost = (e, title, content, state) => {
  e.preventDefault();
  //👇🏻 adds the new post
  addPost(
      localStorage.getItem("u_id"),
      title,
      content,
      formatDate(),
  );
  state.setContent("");
  state.setTitle("");
}
export {handleAddPost};