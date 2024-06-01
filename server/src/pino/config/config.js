import {levels} from './levels.js';
import {transports} from './transports.js';
import  {mixin} from './mixins.js';
const config = {
  useCustomLevelsOnly: levels,
  transport: transports,
  tags: {},
  mixin() {
    return mixin;
  },
};

export {config};