import Discord from "discord.js";
import { EmoteCommands } from "./Commands/EmoteCommands";

const client = new Discord.Client();
const storeEmote = new EmoteCommands();

export class TSDiscordBot {
    public start(token: string): void {
        client.on("ready", () => {
            // tslint:disable-next-line: no-console
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on("message", (msg: { content: string; reply: (arg0: string) => void; }) => {
           // if(msg.content.match("(!retrieve.*|^!store \\<.*).!*")){
                if (msg.content.startsWith("!store")) {
                    storeEmote.Store(msg);
                }
                else if (msg.content.startsWith("!retrieve")){
                    var test = storeEmote.Retrieve(msg);
                    var str = new String(test);
                    console.log(str);
                   var emoji = client.emojis.find(emoj => emoj.name === str);
                   console.log(emoji);
                   msg.reply(`${emoji}`);
                }
           // }            
        });

        client.login(token);
    }
}
