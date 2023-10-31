import { URL } from 'node:url';
import useApp from './app.js';
import useAppConfig from './app.config.js';
import { onceCallback, useDotenv, useLogger } from './utils.js';
import { runDataBase } from './database.js';

export const runBackEnd = onceCallback(async () => {
  await runDataBase();
  useDotenv();
  const logger = useLogger();

  const app = await useApp();
  const config = useAppConfig();
  let url = new URL(`http://${config.host}:${config.port}`);
  app.listen(config.port, config.host, () => {
    logger.log.notice('%s: server listen on ' + url.href, 'BACKEND')
  });
});

export default {
  runBackEnd
}
