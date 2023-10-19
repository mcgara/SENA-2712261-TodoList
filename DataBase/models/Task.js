import useLogger from '../logger.js';
const logger = useLogger();

/** @typedef {import('./Task').Task} ITask */

/**
 * @param {import('./models.js').ConnectionModels} connection
 * @param {number} id
 */
export async function TaskFindById(connection, id) {
  const db = await connection;
  if (!db) return null;

  const query = 'SELECT * FROM task WHERE task.id = ' + id;
  /** @type {ITask | null} */
  let Task = null;

  try {
    const result = await db.query(query);
    if (result[0].length > 0) Task = result[0][0];
  } catch (err) {
    logger.log.error(`MySqlQuery %s: ${err.message}`, err.code ?? '');
  }
  return Task;
}

/** @param {import('./models.js').ConnectionModels} connection */
export function useTaskModel(connection) {
  return {
    findById: id => TaskFindById(connection, id)
  }
}

export default useTaskModel;
