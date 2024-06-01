import {logger} from '../logger';

const mixin = { 
  source: "[NODE]",
  type: logger.levels.labels[logger.level]

}

export {mixin};