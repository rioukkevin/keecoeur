import * as dotenv from "dotenv";
import {
  ClientCredentialsAuthProvider,
  StaticAuthProvider,
} from "@twurple/auth";
import { ChatClient } from "@twurple/chat";
import { onMessageHandler } from "./infrastructure/onMessageHandler";
// import { ApiClient } from "@twurple/api/lib/ApiClient";

const CHANNEL_NAME = "keequer";

const configuration = () => {
  dotenv.config();

  const config = JSON.parse(process.env.CONFIG ?? "");

  const authProvider = new StaticAuthProvider(
    process.env.TWITCH_CLIENT_ID ?? "",
    config.access_token,
    config.scope
  );

  const chatClient = new ChatClient({
    authProvider,
    channels: [CHANNEL_NAME],
  });

  // const apiClient = new ApiClient({ authProvider });

  return {
    Chat: chatClient,
    API: null,
  };
};

const run = async () => {
  const { Chat, API } = configuration();

  await Chat.connect();

  Chat.onMessage(onMessageHandler(Chat, API));

  Chat.onRaid((_, user) => {
    Chat.announce(
      CHANNEL_NAME,
      `Merci pour le raid ${user}, bienvenue à tous parmis les Kékés`
    );
  });

  Chat.onBan((_, user) => {
    Chat.say(CHANNEL_NAME, `@${user} Cheh :kappa: !`);
  });
};

run();
