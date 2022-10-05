require('dotenv').config();
import { Request, Response } from 'express';
import express from 'express';
import { authenticateToken } from '../../../../middleware/authenticationMiddleware';
import { LetterController } from '../../../../controllers/letter.controller';
const router = express.Router();

router.get('/letter', authenticateToken, async (req: Request, res: Response) => {
  const lettersController = new LetterController();
  const response = await lettersController.getLetters();
  res.status(200).send(response);
})

module.exports = router;
