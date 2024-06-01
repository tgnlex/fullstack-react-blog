import pino from 'pino';
import { pinoHttp } from 'pino-http';
import  {mixin} from '../config/mixins';
const transporter = pino.transport(
  { target: '../transporter.js', level: 'debug', options: {
    destination: '../../../logs/http'
  }})
const config = {
  transport: transporter,
  tags: {},
  mixin() {
    return mixin;
  },
};
const httpLogger = pinoHttp(config);

export {httpLogger};