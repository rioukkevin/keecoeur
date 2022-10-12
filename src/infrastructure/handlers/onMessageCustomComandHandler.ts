// import { ApiClient } from "@twurple/api/lib/ApiClient";
import { ApiClient } from "@twurple/api/lib";
import { ChatClient } from "@twurple/chat/lib";
import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";
import { commands } from "../../commands";
import { runCustomCommand } from "../../commands/custom.command";
import { CommandEntity } from "../../models/Command";
import {
  IParsedMessageContent,
  isMessageMatchingCommandInput,
} from "../../parser";
import logger from "../logger";

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
  // const mockedCommands: IParsedMessageContent[] = [
  //   { input: "!loveit", output: "J'aime la baguette" },
  // ];

  const customCommands = await CommandEntity.findAll();
  customCommands.map((command) => {
    const isMatchingCommandInput = isMessageMatchingCommandInput(command, msg);
    logger.info("!loveit : ", isMatchingCommandInput);
    return (
      isMatchingCommandInput &&
      runCustomCommand({ Chat, API }, { channel, command, msg })
    );
  });
};
