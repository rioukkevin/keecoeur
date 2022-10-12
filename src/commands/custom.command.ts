import logger from "../infrastructure/logger";
import { TCustomMessageHandler } from "../infrastructure/handlers/onMessageCustomComandHandler";
import { parseMessage } from "../parser";

export const runCustomCommand: TCustomMessageHandler = async (
  { Chat },
  { channel, command, msg }
) => {
  const validateMessageParams =
    // const parseResult = parseMessage(msg);
    Chat.say(channel, `${command.output}`);
};
