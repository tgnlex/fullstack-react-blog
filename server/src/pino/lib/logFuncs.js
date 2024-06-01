import {getTags, addTags} from './tagFunctions';


function addLogFunctions(logger) {
  // Attatch tag Functions
  logger.tags = getTags();
  logger.addTag = addTags();
  // Attach level change function
  logger.on('level-change', function (lvl, val, prevLvl, prevVal, instance) {
  if (logger !== instance) {
    return 
  }
  logger.level = lvl;
  console.log('%s (%d) was changed to %s (%d)', prevLvl, prevVal, lvl, val)
  return logger;
});
  return logger;
}

export {addLogFunctions};