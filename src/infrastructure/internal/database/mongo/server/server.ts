import mongoose from "mongoose";
import config from "../config/config";

function startDatabase() {
  mongoose.connect(config.database);

  mongoose.connection.on("connected", () => {
    console.log("Connected to database " + config.database);
  });

  mongoose.connection.on("error", (error) => {
    console.log("Database error: " + error);
  });
}

export default { startDatabase };
