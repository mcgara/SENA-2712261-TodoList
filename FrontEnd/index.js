const { spawn } = require('node:child_process');
const { useDotenv, onceCallback, useLogger } = require('./utils.node.js');

const commandRunFrontEnd = 'npx expo start';

/** @type {import('node:child_process').SpawnOptions} */
const runFrontEndSpawnOptions = {
  stdio: 'inherit',
  shell: true
}

const prefixExpoEnv = 'EXPO_PUBLIC';

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

const useBackEndEnv = onceCallback(() => {
  useDotenv();

  const backend = {
    BE_HOST: process.env['BE_HOST'],
    BE_PORT: process.env['BE_PORT']
  }
  
  Object.keys(backend).forEach(key => {
    if (!backend[key]) return;
    process.env[prefixExpoEnv + '_' + key] = backend[key];
  });
})

function runFrontEnd() {
  const logger = useLogger();
  
  useBackEndEnv();
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
  useBackEndEnv,
  runFrontEnd
}
