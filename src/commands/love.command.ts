import { ICommands } from ".";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/onMessageHandler";

export const setting: IMessageFilter = {
  is: "!love",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  Chat.say(channel, "I love you too :kappa: !");
};

const loveCommand: ICommands = {
  run,
  setting,
};

export default loveCommand;
