import { Router, Request, Response } from "express";
import { authenticateToken } from "../../../middleware/authenticationMiddleware";
const login = require('./login/login.route')
const letter = require('./letter/letter.route')
const routes = Router();

routes.use(login);
routes.use(letter);

export default routes;
