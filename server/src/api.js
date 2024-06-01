import express from 'express';
import cors from 'cors';
import {blogRouter} from './routes/blog';
import {authRouter} from './routes/auth';
import {requestLogger} from './pino/logger';
const api = express();

// Global Middleware
api.use(express.urlencoded({ extended: true}));
api.use(express.json());
api.use(cors());
api.use(requestLogger);
// Routes
api.use(blogRouter);
api.use(authRouter);
export {api};