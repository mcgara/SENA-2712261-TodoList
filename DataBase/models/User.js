import { useLogger } from '../utils.js';
const logger = useLogger();

/**
 * @typedef {import('./User').User} IUser 
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 */

/**
 * @param {ModelsConnection} connection
 * @param {number} id
 */
export async function UserFindById(connection, id) {
  const db = await connection;
  if (!db) return null;

  /** @type {IUser | null} */
  let User = null;
  const query = 'SELECT * FROM user WHERE user.id = ?';

  try {
    const result = await db.query(query, [id]);
    if (result[0].length > 0) User = result[0][0];
  } catch (err) {
    logger.log.error(`MySqlQuery %s: ${err.message}`, err.code ?? '');
  }
  return User;
}

/** @param {ModelsConnection} connection */
export function useUserModel(connection) {
  return {
    runTest: () => UserRunTest(connection),
    findById: id => UserFindById(connection, id)
  }
}

export default useUserModel;
