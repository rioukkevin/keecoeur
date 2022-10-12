import { ICommands } from ".";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";

export const setting: IMessageFilter = {
  is: "!love",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  Chat.say(channel, "I love you too poachiKappa !");
};

const loveCommand: ICommands = {
  run,
  setting,
};

export default loveCommand;
