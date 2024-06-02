import express from 'express';
import {logger} from '../pino/logger.js';
const router = express.Router();
router.post('/auth/test', (req, res, next) => {
    logger.event('Hit: /auth/test')
    next();
  });

router.post('/auth/register', register)
function register(req, res, next) {
  logger.event('Hit: /auth/register')
  next();
}
router.post('/auth/login', login)
function login(req, res, next) {
  logger.event('Hit: /auth/login')
  next();
}
router.post('/auth/logout', logout)
function logout(req, res, next) {
  logger.event('Hit: /auth/logout')
  next();
}
const authRouter = router;
export {authRouter};