import { validate } from './../../../../middleware/handleValidation';
require('dotenv').config();
import { Request, Response } from 'express';
import express from 'express';
import { authenticateToken } from '../../../../middleware/authenticationMiddleware';
import { LetterController } from '../../../../controllers/letter.controller';
import { letterGetValidation } from '../../../../middleware/validators/letterValidation';
const router = express.Router();

router.get('/letter', authenticateToken, async (req: Request, res: Response) => {
  const lettersController = new LetterController();
  const response = await lettersController.getLetters();
  res.status(200).send(response);
})

router.get('/letter/:id', authenticateToken, letterGetValidation(), validate, async (req: Request, res: Response) => {
  const lettersController = new LetterController();
  const response = await lettersController.getLetterByUserId(parseInt(req.params.id));
  if (!response) return res.status(400).json({ message: "User not found " });
  res.status(200).send(response);
})

module.exports = router;
