import { Sequelize } from "sequelize";
import logger from "./logger";

const storage = process.env.DB_PATH;

const DB = new Sequelize({
  dialect: "sqlite",
  storage,
  logging: logger.debug,
});

DB.sync();

export default DB;
