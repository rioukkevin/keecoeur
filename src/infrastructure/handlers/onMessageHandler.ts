// import { ApiClient } from "@twurple/api/lib/ApiClient";
import { ApiClient } from "@twurple/api/lib";
import { ChatClient } from "@twurple/chat/lib";
import { TwitchPrivateMessage } from "@twurple/chat/lib/commands/TwitchPrivateMessage";
import { commands } from "../../commands";

export type TMessageHandler = (
  utils: { Chat: ChatClient; API: ApiClient },
  data: { channel: string; msg: TwitchPrivateMessage }
) => Promise<void>;

export interface IMessageFilter {
  startWith?: string;
  contains?: string;
  is?: string;
}

export const onMessageHandler: (
  Chat: ChatClient,
  API: ApiClient
) => (
  channel: string,
  user: string,
  text: string,
  msg: TwitchPrivateMessage
) => void = (Chat, API) => async (channel, username, text, msg) => {
  commands.map((c) => {
    let hadToRun = false;
    if (c.setting.is && c.setting.is === text) hadToRun = true;
    if (c.setting.startWith && text.startsWith(c.setting.startWith))
      hadToRun = true;
    if (c.setting.contains && text.includes(c.setting.contains))
      hadToRun = true;

    if (hadToRun) c.run({ Chat, API }, { channel, msg });
  });
};
