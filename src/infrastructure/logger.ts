import signale from "signale";

signale.config({
  displayFilename: true,
  displayTimestamp: true,
  displayDate: false,
});

signale.star("Logger up !");

const logger = signale;
export default logger;
