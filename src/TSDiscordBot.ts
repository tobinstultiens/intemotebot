import Discord from "discord.js";
import { StoreEmote } from "./Commands/StoreEmote";

const client = new Discord.Client();
const storeEmote = new StoreEmote();

export class TSDiscordBot {
    public start(token: string): void {
        client.on("ready", () => {
            // tslint:disable-next-line: no-console
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on("message", (msg: { content: string; reply: (arg0: string) => void; }) => {
            if (msg.content.startsWith("!store")) {
                storeEmote.Store(msg);
            }
            else if (msg.content.startsWith("!retrieve")){
                storeEmote.Retrieve(msg);
            }
        });

        client.login(token);
    }
}
