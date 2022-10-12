import { ApiClient } from "@twurple/api";
import { StaticAuthProvider } from "@twurple/auth";
import { ChatClient } from "@twurple/chat";
import logger from "./logger";

const CHANNEL_NAME = "keequer";

const config = JSON.parse(process.env.CONFIG ?? "");

export const authProvider = new StaticAuthProvider(
  process.env.TWITCH_CLIENT_ID ?? "",
  config.access_token,
  config.scope
);

export const TwitchChat = new ChatClient({
  authProvider,
  channels: [CHANNEL_NAME],
  logger: {
    custom: logger,
    minLevel: "warning",
  },
});

export const TwitchAPI = new ApiClient({ authProvider });
