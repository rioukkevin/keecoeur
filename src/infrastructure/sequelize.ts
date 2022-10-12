import { Sequelize } from "sequelize";
import logger from "./logger";

const DB = new Sequelize({
  dialect: "sqlite",
  storage: "./data/db.sqlite",
  logging: logger.log,
});

DB.sync();

export default DB;
