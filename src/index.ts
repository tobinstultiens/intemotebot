import { token, mongodb } from "./settings.json";
import { TSDiscordBot } from "./TSDiscordBot";
import { Database } from './Database/Database';

const bot: TSDiscordBot = new TSDiscordBot();
const database: Database = new Database();

database.ConnnectDatabase(mongodb);
bot.start(token);
