import express from 'express';
import { logger } from '../pino/logger.js';
import { reqLogger } from '../mw/reqLog.js';
import { posts } from '~/posts/sample.js';
import { createPost } from '../lib/createPost.js';
import { getPost } from '../lib/getPost.js';
import {handleLike, handleDislike} from '../lib/reactions.js';
const router = express.Router();
router.use(reqLogger);
router.get("/blog/test", (req, res) => {
  res.json({
    message: "/api/blog endpoint hit."
  });
});

router.get('/blog/posts', (req, res, next) => {
  res.json({
    posts,
  });
  next()
});
router.get('/blog/:slug', (req, res, next) => {
  const {slug} = req.params;
  const post = getPost(posts, slug);
  res.json(post);
  next();
})
router.post('/blog/reaction', (req, res, next) => {
  const {slug, type, u_id} = req.body;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug && type == "like") {
      try { handleLike(posts, u_id, i) } 
      catch (err) { logger.error(err) }
      res.json({ message: "post liked" })
      next()
    }
    if (posts[i].slug === slug && type == "dislike") {
      try { handleDislike(posts, u_id, i) } 
      catch (err) { logger.error(err) }
      res.json({ message: "post disliked" })
      next()
    }
  }
  next()
});
router.post('/blog/add', (req, res, next) => {
  const { u_id, title, content, date} = req.body; 
  const post = createPost(u_id, title, content, date);
  posts.unshift(post);
  res.json({message: "Post added successfully!"});
  next();
})
const blogRouter = router;
export {blogRouter};