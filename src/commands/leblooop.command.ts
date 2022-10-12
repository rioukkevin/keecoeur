import { ICommands } from ".";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";

export const setting: IMessageFilter = {
  is: "!leblooop",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  Chat.say(channel, "Mon bisounours amphirLove");
};

const leblooopCommand: ICommands = {
  run,
  setting,
};

export default leblooopCommand;
