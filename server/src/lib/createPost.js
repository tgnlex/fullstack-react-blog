import { generateID } from '../id';
import { createSlug } from '../slug';
let post = {
  post_id: generateID(),
  likes: [],
  dislikes: []
}

const createPost = (u_id, title, content, date) => {
  post.u_id = u_id;
  post.title = title;
  post.content = content;
  post.date = date;
  post.slug = createSlug(title, generateID());
  return post;
}

export {createPost};