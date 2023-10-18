import { readFile } from 'node:fs/promises';
import { joinWithRoot, onceCallback } from '../utils.js';
import useLogger from '../logger.js';

import defaultConnection from '../connection.js';

const logger = useLogger();
export const modelsFilePath = joinWithRoot('models/models.sql');
export const modelsFile = readFile(modelsFilePath, { encoding: 'utf-8' });

/** @param {typeof defaultConnection} connection */
export async function createConnectionModels(connection) {
  /** @type {string | null} */
  let script = null;
  try { script = await modelsFile; }
  catch (err) {
    logger.log.error(`FileSystemError ` + err.message ?? 'unknown error.');
  }

  if (!script) return null;
  
  let connectionModels = null;
  try {
    connectionModels = await connection;
    await connectionModels.query(script);
    logger.log.notice('%s', 'MySqlQueryModel: successful query.');
  } catch (err) {
    logger.log.error(`MySqlQueryModel %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
    connectionModels = null;
  }

  return connectionModels;
}

/** @typedef {ReturnType<createConnectionModels>} ConnectionModels */

export const useConnectionModels = onceCallback(createConnectionModels, defaultConnection);

export default {
  filePath: modelsFilePath,
  file: modelsFile,
  createConnection: createConnectionModels,
  useConnectionModels
}
