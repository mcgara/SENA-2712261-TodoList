import mysql from 'mysql2/promise.js';
import connectionConfig from './connection.config.js';
import useLogger from './logger.js';

const logger = useLogger();
export const connection = mysql.createConnection(connectionConfig);
connection.catch(err => {
  logger.log.error(`MySqlConnect %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
})

export default connection;
