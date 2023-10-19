import { joinWithRoot } from './utils.js';
import useLogger from './logger.js';

export const dotenvAppPath = joinWithRoot('../.env');
export const dotenvPath = joinWithRoot('.env');

export default {
  dotenvPath,
  useLogger
}
