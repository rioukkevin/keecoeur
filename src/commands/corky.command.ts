import { ICommands } from ".";
import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/onMessageHandler";

export const setting: IMessageFilter = {
  is: "!corky",
};

export const run: TMessageHandler = async ({ Chat }, { channel, msg }) => {
  Chat.say(channel, "Deuxième meilleur bot, parce que le premier c'est moi !");
};

const corkyCommand: ICommands = {
  run,
  setting,
};

export default corkyCommand;
