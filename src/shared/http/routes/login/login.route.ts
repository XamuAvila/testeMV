require('dotenv').config();
import { Request, Response } from 'express';
import express from 'express';
import * as jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const username = req.body.username;
  if (username != "mvteste") return res.sendStatus(401);

  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || '');
  res.json({ accessToken: accessToken });
})

module.exports = router;
