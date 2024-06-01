import express from 'express';
import {logger} from '../pino/logger.js';
const router = express.Router();
router.post('/auth/test', (req, res, next) => {
    logger.http(req);
    logger.event('Client hit /auth/test')
    next();
  });

router.post('/auth/register', register)
function register(req, res, next) {
  logger.http(req);
  logger.event('Client hit/auth/register')
  next();
}
router.post('/auth/login', login)
function login(req, res, next) {
  logger.http(req);
  logger.event('Client hit /auth/login')
  next();
}
router.post('/auth/logout', logout)
function logout(req, res, next) {
  logger.http(req);
  next();
}
const authRouter = router;
export {authRouter};