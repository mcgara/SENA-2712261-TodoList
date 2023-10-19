import dotenv from 'dotenv';
import { dotenvAppPath, dotenvPath } from './index.js';
import useLogger from './logger.js';
import models from './models/index.js';

dotenv.config({ path: dotenvAppPath });
dotenv.config({
  path: dotenvPath,
  override: !(process.env['DOTENV_APP']?.toLowerCase() === 'true')
});

const logger = useLogger();

const connection = await models.useConnection();
if (connection) {
  await connection.connect();
  logger.log.notice('%s', 'MySqlConnect: successful connection.');
  const User = models.useUser(connection);
  const Task = models.useTask(connection);
  const user = await User.findById(1);
  const task = await Task.findById(1);
  console.log(user?.name)
  console.log(task?.title)
}
