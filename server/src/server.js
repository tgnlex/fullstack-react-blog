import {createServer} from 'http';
import {api} from './api.js';
import {logger} from './pino/logger.js';
const PORT = 4000;
const server = createServer(api);

server.listen(PORT, () => {
  logger.event(`Server Listening on ${PORT}`);
})