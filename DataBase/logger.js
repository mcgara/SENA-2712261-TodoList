import logNode from 'log-node';
import log from 'log';

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

export function createLogger() {
  /** @type {ReturnType<runLogger>} */
  let logData = null;
  return () => {
    if (logData === null) logData = runLogger();
    return logData;
  }
}

export const useLogger = createLogger();
export default useLogger;

