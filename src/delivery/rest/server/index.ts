import express from "express";

import routes from "../routes";
import { Server } from "./config/config";

import bodyParser from "body-parser";

import mongo from '../../../infrastructure/internal/database/mongo/server/server'

const app = express();

function start() {
  app.use(bodyParser.json());
  app.use(routes);

  mongo.startDatabase()

  app.listen(Server.PORT);
}

export default { start };
