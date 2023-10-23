import useLogger from '../logger.js';
const logger = useLogger();

/** @typedef {import('./User').User} IUser */

/** @param {import('./models.js').ModelsConnection} connection */
export async function UserRunTest(connection) {
  const db = await connection;
  if (!db) return;

  try {
    await db.query('SELECT * FROM user');
    logger.log.notice('MySqlQuery: successful test User.');
  } catch (err) {
    logger.log.error(`MySqlQuery %s: ${err.message}`, err.code ?? '');
  }
}

/**
 * @param {import('./models.js').ModelsConnection} connection
 * @param {number} id
 */
export async function UserFindById(connection, id) {
  const db = await connection;
  if (!db) return null;

  const query = 'SELECT * FROM user WHERE user.id = ' + id;
  /** @type {IUser | null} */
  let User = null;

  try {
    const result = await db.query(query);
    if (result[0].length > 0) User = result[0][0];
  } catch (err) {
    logger.log.error(`MySqlQuery %s: ${err.message}`, err.code ?? '');
  }
  return User;
}

/** @param {import('./models.js').ModelsConnection} connection */
export function useUserModel(connection) {
  return {
    runTest: () => UserRunTest(connection),
    findById: id => UserFindById(connection, id)
  }
}

export default useUserModel;
