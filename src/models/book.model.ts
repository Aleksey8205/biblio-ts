import { Schema, model } from 'mongoose';
import { Book } from '../service/interfaces/book.ts';


const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  description: { type: String },
  authors: { type: String },
  favorite: { type: Boolean }, 
  fileCover: { type: String },
  fileName: { type: String },
}, { timestamps: true });

const BookModel = model<Book>("Book", bookSchema);

export { BookModel };