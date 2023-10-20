import { joinWithRoot } from './utils.js';
import useLogger from './logger.js';
import models from './models/index.js';
import utils from './utils.js';

const dotenvPathApp = joinWithRoot('../.env');
const dotenvPath = joinWithRoot('.env');

export default {
  dotenvPath,
  dotenvPathApp,
  useLogger,
  ...models,
  utils
}
