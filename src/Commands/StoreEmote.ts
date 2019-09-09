export class StoreEmote {
    public Store(msg: { content: string; reply: (arg0: string) => void; }) {
        if (msg.content.startsWith("!store \\<") && msg.content.endsWith(">")) {
            msg.reply("Emote has been stored");
        }
    }
}
