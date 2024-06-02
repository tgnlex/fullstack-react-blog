import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {addPost} from '../../api/addPost';
import {formatDate} from '../../lib/date';

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(
      localStorage.getItem("u_id"),
      title, 
      content, 
      formatDate(),
      navigate
    );
    setContent("");
    setTitle("");
  }
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="title-label">Title</label>
      <input 
        type="text"
        className="post-title"
        id="title"
        name="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content" id="title-label">Content</label>
      <textarea
        rows={10}
        className="post-content"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
     />
     <button id="submit-btn" type="submit">
      Submit Post
     </button>
    </form>
  )
}

export {PostForm};