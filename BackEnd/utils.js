import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const root = __dirname;

/** @param {string[]} paths */
export function joinWithRoot(...paths) {
  return path.normalize(path.join(root, ...paths));
}

export const dotenvPathApp = joinWithRoot('../.env');
export const dotenvPath = joinWithRoot('.env');

export default {
  root,
  joinWithRoot,
  dotenvPathApp,
  dotenvPath
}
