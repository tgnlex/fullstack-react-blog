import { logger } from "../pino/logger";

const reqLogger = (req, next) => {
  logger.http(req)
  next();
}

export {reqLogger};