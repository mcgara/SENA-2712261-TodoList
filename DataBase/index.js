import dotenv from 'dotenv';
import useLogger from './logger.js';
import models from './models/index.js';
import utils from './utils.js';

const runDataBase = utils.onceCallback(async () => {
  dotenv.config({ path: utils.dotenvPathApp });
  dotenv.config({
    path: utils.dotenvPath,
    override: !(process.env['DOTENV_APP']?.toLowerCase() === 'true')
  });

  const logger = useLogger();

  const connection = await models.useConnection();
  if (connection) {
    await connection.connect();
    logger.log.notice('%s', 'MySqlConnect: successful connection.');
  } else {
    logger.log.error('MySqlConnect: error connection failed.');
  }

  // return connection;
})

export default {
  useLogger,
  ...models,
  utils,
  runDataBase
}
