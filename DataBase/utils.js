import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const root = __dirname;

/** @param {string[]} paths */
export function joinWithRoot(...paths) {
  return path.join(root, ...paths);
}

export default {
  root,
  joinWithRoot
}
