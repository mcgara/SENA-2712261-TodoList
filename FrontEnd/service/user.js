import api from './api';

/** @typedef {import('./user').User} IUser */

/**
 * @param {number} id
 * @return {Promise<IUser> | null}
 */
export const getUserById = (id) => !api ? null : api.get('/user/' + id);

export default {
  getById: getUserById
}
