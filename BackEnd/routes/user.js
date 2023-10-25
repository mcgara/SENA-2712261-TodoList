import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useConnection, useUser } from '../database.js';

const userRoute = Router();

const useUserRoute = onceCallback(async () => {
  const connection = await useConnection();
  const User = useUser(connection);

  userRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await User.findById(id));
  })

  return userRoute;
})

export default useUserRoute;
