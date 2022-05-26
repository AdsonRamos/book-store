import express from "express";

import routes from "../routes";
import { Server } from "./config/config";

import bodyParser from "body-parser";

const app = express();

function start() {
  app.use(bodyParser.json());
  app.use(routes);

  app.listen(Server.PORT);
}

export default { start };
