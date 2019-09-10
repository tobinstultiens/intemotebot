import Emote from '../Database/EmoteModel';

export class StoreEmote {
    public Store(msg: { content: string; reply: (arg0: string) => void; }) {
        if (msg.content.startsWith("!store \\<") && msg.content.endsWith(">")) {
            var emote = new Emote();
            var message = msg.content.split(":", 3);
            var number = message[2].slice(0, -1);
            emote.shortcut = message[1];
            emote.id = Number(number);
            if (!isNaN(emote.id)) {
                emote.save((err: any) => {
                    if (err) {
                        msg.reply("Failed to store.");
                    }
                });
                msg.reply("Emote has been stored");
            }
            else {
                msg.reply("Failed to store.");
            }
        }
    }
}
