import mysql from 'mysql2/promise.js';
import useDefaultConnectionConfig from './connection.config.js';
import { onceCallback, useLogger } from './utils.js';

const logger = useLogger();
export const useConnection = onceCallback(() => {
  const defaultConnection = mysql.createConnection(useDefaultConnectionConfig());
  defaultConnection.catch(err => {
    logger.log.error(`MySqlConnect %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
  })

  return defaultConnection;
})

export default useConnection;
