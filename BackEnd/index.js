import express from 'express';
import DB from '../DataBase/index.js';
import utils from './utils.js';

await DB.runDataBase();
const connection = await DB.useConnection();
const User = DB.useUser(connection)
// console.log(await User.findById(1))

const app = express();

app.get('/user/:id', async (req, res) => {
  const id = Number(req.params.id);
  res.json(await User.findById(id));
})

app.listen(5500)
