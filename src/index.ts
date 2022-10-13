import "./infrastructure/config";
import { onMessageHandler } from "./infrastructure/handlers/onMessageHandler";
import "./infrastructure/logger";
import "./infrastructure/sequelize";

import { onMessageCustomCommandHandler } from "./infrastructure/handlers/onMessageCustomComandHandler";
import { TwitchAPI, TwitchChat } from "./infrastructure/twurple";

const run = async () => {
  await TwitchChat.connect();

  TwitchChat.onMessage(onMessageHandler(TwitchChat, TwitchAPI));
  TwitchChat.onMessage(onMessageCustomCommandHandler(TwitchChat, TwitchAPI));

  TwitchChat.onRaid((channel, user) => {
    TwitchChat.announce(
      channel,
      `Merci pour le raid ${user}, bienvenue à tous parmis les Kékés`
    );
  });

  TwitchChat.onBan((channel, user) => {
    TwitchChat.say(channel, `@${user} Cheh :kappa: !`);
  });
};

run();
