import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";
import logger from "../infrastructure/logger";

export interface IParsedMessageContent {
  input: string;
  output: string;
}

export const parseMessage = (
  command: TwitchPrivateMessage
): IParsedMessageContent => {
  const parsedMessageArguments = command.content.value
    .split('"')
    .filter((value) => !!value.trim());

  logger.debug("parsedMessageArguments : ", parsedMessageArguments);
  const input = parsedMessageArguments[1];
  const output = parsedMessageArguments[2];

  return {
    input,
    output,
  };
};
