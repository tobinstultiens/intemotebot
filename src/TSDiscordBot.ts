const Discord = require('discord.js');
const client = new Discord.Client();

export class TSDiscordBot {
    public start(token: string): void {
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('message', (msg: { content: string; reply: (arg0: string) => void; }) => {
            if (msg.content === 'ping') {
                msg.reply('<:kms:298748483370745856>');
            }
        });
        client.login(token);
    }
}