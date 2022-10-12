import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";
import corkyCommand from "./corky.command";
import leblooopCommand from "./leblooop.command";
import loveCommand from "./love.command";
import cmdAddCommand from "./cmd-add.command";

export interface ICommands {
  setting: IMessageFilter;
  run: TMessageHandler;
}

export const commands: ICommands[] = [
  loveCommand,
  corkyCommand,
  leblooopCommand,
  cmdAddCommand,
];
