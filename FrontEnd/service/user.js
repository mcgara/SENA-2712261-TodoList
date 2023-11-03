import { api, routes } from './api'

/** @typedef {import('./types').User} User */

/**
 * @param {number | string} id
 * @return {Promise<User | null>}
 */
export const getUserById = async (id) => !api ? null : (await (api.get(routes.user.get(id)))).data;

export default {
  getById: getUserById
}
