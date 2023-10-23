import logNode from 'log-node';
import log from 'log';
import { onceCallback } from './utils.js';

function runLogger() {
  process.env['LOG_LEVEL'] = process.env['DEBUG'] ? 'debug' : 'info';
  const level = process.env['LOG_LEVEL'];
  const writter = logNode();
  return {
    level,
    writter,
    log
  }
}

export const useLogger = onceCallback(runLogger);
export default useLogger;
