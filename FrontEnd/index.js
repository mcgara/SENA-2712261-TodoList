const { spawn } = require('node:child_process');
const { useDotenv, onceCallback, useLogger } = require('./utils.node.js');

const commandRunFrontEnd = 'npx expo start';

/** @type {import('node:child_process').SpawnOptions} */
const runFrontEndSpawnOptions = {
  stdio: ['pipe', 'inherit', 'inherit'],
  shell: true
}

const prefixExpoEnv = 'EXPO_PUBLIC';
const defaultApiUrl = 'http://localhost:8010';

const useFronEndEnv = onceCallback(() => {
  useDotenv();
  
  const frontend = {
    host: process.env['FE_HOST'],
    port: process.env['FE_PORT'],
    https: process.env['FE_HTTPS'],
    localhost: process.env['FE_LOCALHOST'],
    offline: process.env['FE_OFFLINE']
  }
  
  if (frontend.host) process.env['EXPO_PACKAGER_PROXY_URL'] = frontend.host;
  const argv = process.argv.slice(2);
  if (frontend.port) argv.push('--port', frontend.port);
  if (frontend.https === 'true') argv.push('--https');
  if (frontend.localhost === 'true') argv.push('--localhost');
  if (frontend.offline === 'true') argv.push('--offline');

  return argv;
})

const useApiEnv = onceCallback(() => {
  useDotenv();

  const api = {
    API_HOST: process.env['BE_HOST'],
    API_PORT: process.env['BE_PORT'],
    API_URL: process.env['BE_URL']
  }

  const url = `http://${api.API_HOST}:${api.API_PORT}`;
  if (!api.API_URL && api.API_HOST && api.API_PORT) api.API_URL = url;
  else if (!api.API_URL) api.API_URL = defaultApiUrl;
  
  Object.keys(api).forEach(key => {
    if (!api[key]) return;
    const envKey = prefixExpoEnv + '_' + key;
    if (!process.env[envKey]) process.env[envKey] = api[key];
  });
})

function runFrontEnd() {
  const logger = useLogger();
  
  useApiEnv();
  const argv = [
    ...process.argv.slice(2),
    ...useFronEndEnv()
  ];

  const app = spawn(commandRunFrontEnd, argv, runFrontEndSpawnOptions);
  app.on('error', err => logger.error('FrontEnd %s:' + err.message, err.name));
}

module.exports = {
  commandRunFrontEnd,
  runFrontEndSpawnOptions,
  prefixExpoEnv,
  useFronEndEnv,
  useApiEnv,
  runFrontEnd
}
