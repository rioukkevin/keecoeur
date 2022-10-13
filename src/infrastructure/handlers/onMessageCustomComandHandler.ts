// import { ApiClient } from "@twurple/api/lib/ApiClient";
import { ApiClient } from "@twurple/api/lib";
import { ChatClient } from "@twurple/chat/lib";
import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";
import { runCustomCommand } from "../../commands/custom.command";
import { IParsedMessageContent, parseCommandTrigger } from "../../parser";
import { getCommandByTriggerAndChannel } from "../../repositories/command.repository";

export type TCustomMessageHandler = (
  utils: { Chat: ChatClient; API: ApiClient },
  data: {
    channel: string;
    command: IParsedMessageContent;
    msg: TwitchPrivateMessage;
  }
) => Promise<void>;

export const onMessageCustomCommandHandler: (
  Chat: ChatClient,
  API: ApiClient
) => (
  channel: string,
  user: string,
  text: string,
  msg: TwitchPrivateMessage
) => void = (Chat, API) => async (channel, username, text, msg) => {
  const trigger = parseCommandTrigger(msg.content.value);
  const customCommand = await getCommandByTriggerAndChannel({
    trigger,
    channel,
  });

  if (customCommand === null) return;

  return runCustomCommand(
    { Chat, API },
    { channel, command: customCommand, msg }
  );
};
