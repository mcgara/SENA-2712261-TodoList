import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const root = __dirname;

/** @param {string[]} paths */
export function joinWithRoot(...paths) {
  return path.normalize(path.join(root, ...paths));
}

/**
 * @template T, P
 * @param {(...args: P) => T} callback
 * @param {P} args
 * @return {() => T}
 */
export function onceCallback(callback, ...args) {
  if (typeof callback !== 'function') throw TypeError('parameter callback must be type function');
  let value;
  let onceCall = false;
  return () => {
    if (!onceCall) {
      value = callback(...args);
      onceCall = true;
    }
    return value;
  }
}

export const dotenvPathApp = joinWithRoot('../.env');
export const dotenvPath = joinWithRoot('.env');

export default {
  root,
  joinWithRoot,
  onceCallback,
  dotenvPathApp,
  dotenvPath
}
