import signale from "signale";

signale.config({
  displayFilename: true,
  displayTimestamp: true,
  displayBadge: true,
  displayDate: true,
  uppercaseLabel: true,
  displayLabel: true,
});

signale.star("Logger up !");

const logger = signale;
export default logger;
