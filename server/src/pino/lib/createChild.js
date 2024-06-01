import {addTag, createTag} from './fn/tags.js';
import {logger} from '../logger.js';

const createChild = (parent, ...context) => {
  const newChild = logger.child(...context);
  newChild.tags = {...logger.tags};
  newChild.addTag = addTag();
  newChild.createTag = createTag();
}

export {createChild};