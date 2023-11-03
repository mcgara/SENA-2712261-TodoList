const { spawn } = require('node:child_process');
const { URL } = require('node:url');
const { useDotenv, onceCallback, useLogger } = require('./utils.node.js');

const commandRunFrontEnd = 'npx expo start';

/** @type {import('node:child_process').SpawnOptions} */
const runFrontEndSpawnOptions = {
  stdio: 'inherit', // interactive expo commands stdin
  shell: true
}

const prefixExpoEnv = 'EXPO_PUBLIC';
const defaultApiUrl = 'http://localhost:8010';

const useFronEndEnv = onceCallback(() => {
  useDotenv();
  
  const environ = {
    host: process.env['FE_HOST'],
    port: process.env['FE_PORT'],
    url: process.env['FE_URL'],
    https: process.env['FE_HTTPS']?.toLowerCase(),
    localhost: process.env['FE_LOCALHOST']?.toLowerCase(),
    offline: process.env['FE_OFFLINE']?.toLowerCase()
  }
  
  const isHttps = environ.https === 'true';
  if (!environ.url && environ.host) {
    const protocol = isHttps ? 'https' : 'http'
    const url = new URL(`${protocol}://${environ.host}${environ.port ? ':' + environ.port : ''}`);
    process.env['EXPO_PACKAGER_PROXY_URL'] = url;
  }
  const argv = process.argv.slice(2);
  if (environ.port) argv.push('--port', environ.port);
  if (isHttps) argv.push('--https');
  if (environ.localhost === 'true') argv.push('--localhost');
  if (environ.offline === 'true') argv.push('--offline');

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
