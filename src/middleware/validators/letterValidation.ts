import { body, header, param, query } from 'express-validator';

export const letterGetValidation = () => {
  return [
    param("id")
      .isNumeric()
      .withMessage("User id must be a number"),
  ]
}
