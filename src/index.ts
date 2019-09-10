import { token } from "./settings.json";
import { TSDiscordBot } from "./TSDiscordBot";

const bot: TSDiscordBot = new TSDiscordBot();
bot.start(token);
