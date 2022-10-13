import {
  IMessageFilter,
  TMessageHandler,
} from "../infrastructure/handlers/onMessageHandler";
import cmdAddCommand from "./cmd-add.command";
import corkyCommand from "./corky.command";
import leblooopCommand from "./leblooop.command";
import loveCommand from "./love.command";

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

export const globalTriggers = commands.flatMap(({ setting }) =>
  Object.entries(setting).flatMap(([_, value]) => value)
);
