import mysql from 'mysql';
import defaultConnectionConfig from './connection.config.json';

/** @type {mysql.ConnectionConfig} */
let connectionConfigEnv = {
  database: process.env['DB_NAME'],
  host: process.env['DB_HOST'],
  port: process.env['DB_PORT'],
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD']
}

connectionConfigEnv = Object.fromEntries(
  Object.entries(connectionConfigEnv)
    .reduce((p, c) => c[0] ? ({ ...p, c }) : p, {})
);

export const connectionConfig = {
  ...defaultConnectionConfig,
  ...connectionConfigEnv
}

export const connection = mysql.createConnection(connectionConfig);

export default connection;
