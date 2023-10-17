import logNode from 'log-node';
import log from 'log';

function runLogger() {
  process.env['LOG_LEVEL'] = process.env['DEBUG'] ? 'debug' : 'info';
  const Level = process.env['LOG_LEVEL'];
  const Writter = logNode();
  return {
    Level,
    Writter,
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

const useLogger = createLogger();
export default useLogger;

