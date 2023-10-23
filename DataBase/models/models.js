import { readFile } from 'node:fs/promises';
import { joinWithRoot, onceCallback } from '../utils.js';
import useLogger from '../logger.js';

import useDefaultConnection from '../connection.js';

const logger = useLogger();
export const modelsFilePath = joinWithRoot('models/models.sql');
export const modelsFile = readFile(modelsFilePath, { encoding: 'utf-8' });

/** @param {Awaited<ReturnType<useDefaultConnection>>} connection */
export async function createModelsConnection(connection) {
  /** @type {string | null} */
  let script = null;
  try {
    script = await modelsFile;
  } catch (err) {
    logger.log.error(`FileSystemError: ` + err.message ?? 'unknown error.');
  }
  
  let modelsConnection = null;
  if (script === null) return modelsConnection;
  
  try {
    const queries = script.trim().split(';').map(query => query.trim());
    modelsConnection = await connection;
    for (const query of queries) {
      if (!query) continue;
      await modelsConnection.query(query);
    }
    logger.log.notice('%s', 'MySqlQueryModel: successful query of models file.');
  } catch (err) {
    logger.log.error(`MySqlQueryModel %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
    modelsConnection = null;
  }

  return modelsConnection;
}

/** @typedef {ReturnType<createModelsConnection>} ModelsConnection */

export const useModelsConnection = onceCallback(async () => createModelsConnection(await useDefaultConnection()));

export default {
  filePath: modelsFilePath,
  file: modelsFile,
  createConnection: createModelsConnection,
  useConnection: useModelsConnection
}
