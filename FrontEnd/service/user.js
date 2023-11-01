import api from './api';

/** @typedef {import('./types').User} IUser */

/**
 * @param {number} id
 * @return {Promise<IUser | null>}
 */
export const getUserById = async (id) => !api ? null : (await (api.get('/user/' + id))).data;

export default {
  getById: getUserById
}
