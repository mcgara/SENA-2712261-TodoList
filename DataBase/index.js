import { joinWithRoot } from './utils.js';
import useLogger from './logger.js';

export const dotenvPath = joinWithRoot('.env');

export default {
  dotenvPath,
  useLogger
}
