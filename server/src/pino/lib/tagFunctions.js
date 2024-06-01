import {logger} from '../logger';
let tags = logger.tags;

const getTags = () => {
  if (tags === undefined) {
    tags = {};
    return 'Empty';
  } else {
    return tags;
}
}

const addTags = (key, value) => {
  logger.tags[key] = value;
}
export {tags, getTags, addTags};