import { readFile } from 'node:fs/promises';
import { joinWithRoot } from '../utils.js';
import connection from '../connection.js';
import useLogger from '../logger.js';

const logger = useLogger();
export const modelsFilePath = joinWithRoot('models/models.sql');
export const modelsFile = readFile(modelsFilePath, { encoding: 'utf-8' });

export async function database() {
  /** @type {string | null} */
  let script = null;
  try { script = await modelsFile; }
  catch (err) { logger.log.error(`FileSystemError ` + err.message ?? 'unknown error.'); }

  if (!script) return null;
  
  let db = null;
  try {
    db = await connection;
    const _result = await db.query(script);
    if (_result) logger.log.notice('%s', 'MySqlQuery: successful query.');
  } catch (err) {
    logger.log.error(`MySqlQuery %s: ${err.message ?? 'unknown error.'}`, err.code ?? '');
    db = null;
  }

  return db;
}

export default {
  filePath: modelsFilePath,
  file: modelsFile,
  database,
}
