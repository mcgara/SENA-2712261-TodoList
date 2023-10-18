import dotenv from 'dotenv';
import { dotenvPath } from './index.js';
import useLogger from './logger.js';
import models from './models/index.js';

dotenv.config({ path: dotenvPath, override: true });
const logger = useLogger();

const connection = await models.useConnection();
if (connection) {
  await connection.connect();
  logger.log.notice('%s', 'MySqlConnect: successful connection.');
  await models.User.runTest(connection);
}
