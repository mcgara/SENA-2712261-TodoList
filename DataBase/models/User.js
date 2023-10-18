import useLogger from '../logger.js';
const logger = useLogger();

/** @param {import('./models.js').ConnectionModels} connection */
export async function runTest(connection) {
  const db = await connection;
  if (!db) return;

  try {
    const results = await db.query('SELECT * FROM User');
    if (results) logger.log.notice('MySqlQuery: %s', String(results));
  } catch (err) { logger.log.error(`MySqlQuery %s: ${err.message}`, err.code ?? ''); }
}

export default {
  runTest
}
