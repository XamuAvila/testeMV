import express from 'express';
import config from '../../config/config';
import cors from 'cors';
import routes from './routes'
import morganMiddleware from "../../middleware/morganMiddleware";
import Logger from "../../config/logger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

app.use("/api/", routes);

const port = config.port;

app.listen(port, () => {
  Logger.info(`Application running on ${port}!`)
})
