import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";
import { parseParameters } from "./parseMessageParameters";

export interface IParsedMessageContent {
  input: string;
  output: string;
}

export const parseMessageFromCommandAdd = (
  command: TwitchPrivateMessage
): IParsedMessageContent => {
  const parsedMessageArguments = parseParameters(command.content.value);

  const input = parsedMessageArguments[0];
  const output = parsedMessageArguments[1];

  return {
    input,
    output,
  };
};
