import { globalTriggers, ICommands } from ".";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";
import { CommandEntity } from "../models/Command";
import { parseMessageFromCommandAdd } from "../parser";
import { parseCommandTrigger } from "../parser/parseCommandTrigger";
import { getCommandByTriggerAndChannel } from "../repositories/command.repository";

export const setting: IMessageFilter = {
  startWith: "!cmd add",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  const command = parseMessageFromCommandAdd(msg);

  const trigger = parseCommandTrigger(command.input);

  if (globalTriggers.includes(trigger))
    return Chat.say(channel, `Nom de comande interdit`);

  const existingCommand = await getCommandByTriggerAndChannel({
    trigger,
    channel,
  });

  if (existingCommand !== null)
    return Chat.say(channel, `La commande ${trigger} existe déjà`);

  const payloads = {
    ...command,
    trigger,
    channel,
  };

  await CommandEntity.create(payloads);

  Chat.say(channel, `Commande ${trigger} bien ajoutée !`);
};

const cmdAddCommand: ICommands = {
  run,
  setting,
};

export default cmdAddCommand;
