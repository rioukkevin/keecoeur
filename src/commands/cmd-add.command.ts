import { ICommands } from ".";
import logger from "../infrastructure/logger";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";
import { parseMessage } from "../parser";
import { CommandEntity } from "../models/Command";

export const setting: IMessageFilter = {
  startWith: "!cmd",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  const parseResult = parseMessage(msg);

  await CommandEntity.create({
    ...parseResult,
    channel,
  });

  Chat.say(channel, `Commande ${parseResult.input} bien ajoutée !`);
};

const cmdAddCommand: ICommands = {
  run,
  setting,
};

export default cmdAddCommand;
