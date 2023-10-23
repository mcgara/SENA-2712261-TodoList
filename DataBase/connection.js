import mysql from 'mysql2/promise.js';
import defaultConnectionConfig from './connection.config.js';
import useLogger from './logger.js';
import { onceCallback } from './utils.js';

const logger = useLogger();
export const useConnection = onceCallback(() => {
  const defaultConnection = mysql.createConnection(defaultConnectionConfig());
  defaultConnection.catch(err => {
    logger.log.error(`MySqlConnect %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
  })

  return defaultConnection;
})


export default useConnection;
