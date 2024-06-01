import {FormEvent, useState} from 'react'

function PostForm() {
  const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  console.log({title, content});
  setContent("");
  setTitle("");
}
  return (
    <form className="newPost-form" onSubmit={handleSubmit}>
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