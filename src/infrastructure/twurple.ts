import { ApiClient } from "@twurple/api";
import { StaticAuthProvider } from "@twurple/auth";
import { ChatClient } from "@twurple/chat";
import logger from "./logger";

const config = JSON.parse(process.env.TWITCH_CONFIG ?? "");
const channels = JSON.parse(process.env.TWITCH_CHANNEL ?? "");

export const authProvider = new StaticAuthProvider(
  process.env.TWITCH_CLIENT_ID ?? "",
  config.access_token,
  config.scope
);

export const TwitchChat = new ChatClient({
  authProvider,
  channels: channels,
  logger: {
    custom: logger,
    minLevel: "warning",
  },
});

export const TwitchAPI = new ApiClient({ authProvider });
