import mysql from 'mysql2/promise.js';
import connectionConfig from './connection.config.js';

export const connection = mysql.createConnection(connectionConfig);
export default connection;
