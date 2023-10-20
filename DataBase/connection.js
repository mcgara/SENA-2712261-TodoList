import mysql from 'mysql2/promise.js';
import defaultConnectionConfig from './connection.config.js';
import useLogger from './logger.js';

const logger = useLogger();
export const defaultConnection = mysql.createConnection(defaultConnectionConfig);
defaultConnection.catch(err => {
  logger.log.error(`MySqlConnect %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
})

export default defaultConnection;
