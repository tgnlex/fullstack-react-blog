import {config} from './config/config.js';
import {createLogger} from './lib/createLogger.js';

const logger = createLogger(config);
export {logger};