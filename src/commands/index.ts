import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/onMessageHandler";
import corkyCommand from "./corky.command";
import loveCommand from "./love.command";

export interface ICommands {
  setting: IMessageFilter;
  run: TMessageHandler;
}

export const commands: ICommands[] = [loveCommand, corkyCommand];
