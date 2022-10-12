import { IParsedMessageContent } from "./parseMessageFromCommandAdd";
import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";

export const isMessageMatchingCommandInput = (
  command: IParsedMessageContent,
  message: TwitchPrivateMessage
): boolean => {
  return message.content.value.startsWith(command.input);
};
