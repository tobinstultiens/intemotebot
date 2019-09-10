import * as mongoose from "mongoose";

export class Database {
    public Emote(uri: string) {
        mongoose.connect(uri, (err: any) => {
            if (err) {
              console.log(err.message);
            } else {
              console.log("Successfully Connected!");
            }
          });
    }
}