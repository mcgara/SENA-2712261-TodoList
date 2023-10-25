import models, { useModelsConnection } from './models/index.js';
import utils, { onceCallback, useDotenv, useLogger } from './utils.js';

export const runDataBase = onceCallback(async () => {
  useDotenv();
  const logger = useLogger();

  const connection = await useModelsConnection();
  if (connection) {
    await connection.connect();
    logger.log.notice('%s', 'MySqlConnect: successful connection.');
  } else {
    logger.log.error('MySqlConnect: error connection failed.');
  }
})

export default {
  ...models,
  utils,
  runDataBase
}
