import pino from 'pino';
import { addLogFunctions } from './logFuncs';

function createLogger(config) { 
  let base = pino(config);
  try {
    const logger = addLogFunctions(base);
    return logger;
  } 
  catch (err) { console.error(err.message); return err}
}

export {createLogger};