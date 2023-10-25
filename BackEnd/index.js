import useApp from './app.js';
import useAppConfig from './app.config.js';
import { onceCallback, useDotenv } from './utils.js';
import { runDataBase } from './database.js';

export const runBackEnd = onceCallback(async () => {
  await runDataBase();
  useDotenv();

  const app = await useApp();
  const appConfig = useAppConfig();
  app.listen(appConfig.port, appConfig.host);
});

export default {
  runBackEnd
}
