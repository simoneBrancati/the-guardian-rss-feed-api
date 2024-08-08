import winston from "winston";
import { debugMode } from "../environment";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: debugMode ? "debug" : "http",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    json(),
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
