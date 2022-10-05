import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


export const validate = (req: Request, response: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }

  const extractedErrors: object[] = [];
  errors.array().forEach(err => extractedErrors.push({ [err.param]: err.msg }));

  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: extractedErrors
    })
  }

}
