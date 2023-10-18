import dotenv from 'dotenv';
import { dotenvPath } from './index.js';
import useLogger from './logger.js';
import connection from './connection.js';
import models from './models/index.js';

dotenv.config({ path: dotenvPath, override: true });
const logger = useLogger();

connection.connect(err => {
  if (!err) logger.log.notice('%s', 'MySqlConnect: successful connection.');
  if (!err) return;
  logger.log.error(`MySqlConnect Error %s: ${err.message}`, err.code);
})

models.User.runTest();
