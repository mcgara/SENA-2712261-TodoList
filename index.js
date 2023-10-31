import { spawn } from 'node:child_process';

const commands = {
  database: 'npm run database',
  backend: 'npm run backend',
  frontend: 'npm run frontend',
}

export function runApp() {
  // const database = spawn(commands.database);
  stdio = ['pipe', 'inherit', 'inherit']
  const backend = spawn(commands.backend, { stdio, shell: true });
  const frontend = spawn(commands.frontend, { stdio, shell: true });
  
  backend.on('error', err => console.error(err));
  frontend.on('error', err => console.error(err));
}

export default {
  runApp
}
