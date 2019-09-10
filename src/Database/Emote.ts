import * as mongoose from "mongoose";

export interface IEmote extends mongoose.Document {
    shortcut: string;
    id: number;
  }

export const EmoteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    shortcut: { type: String, required: true },
  });

const Book = mongoose.model<IEmote>("Book", EmoteSchema);
export default Book;
