import express from 'express';
import {posts} from '~/posts/sample.js';

const router = express.Router();

router.get("/blog/test", (req, res) => {
  res.json({
    message: "/api/blog endpoint hit."
  });
});

router.get('/blog/posts', (req, res) => {
  res.json({
    posts,
  })
})
const blogRouter = router;
export {blogRouter};