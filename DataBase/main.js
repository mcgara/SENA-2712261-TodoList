import DB from './index.js';

await DB.runDataBase();
const connection = await DB.useConnection();

const User = DB.useUser(connection)

console.log(await User.findById(1))
