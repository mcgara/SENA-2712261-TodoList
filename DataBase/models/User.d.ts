import { ConnectionModels } from './models.js';

export interface User {
  id: number
  name: string
  lastname: string
  username: string
  email: string
  password: string
  create_time: string
}

export function UserRunTest(connection: ConnectionModels): Promise<void>
export function UserFindById(connection: ConnectionModels, id: number): Promise<User | null>

export function UserModel(): {
  runTest: () => ReturnType<typeof UserRunTest>
  findById: (id: number) => ReturnType<typeof UserFindById>
}

export default UserModel
