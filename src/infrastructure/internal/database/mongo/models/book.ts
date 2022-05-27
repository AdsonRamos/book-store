import mongoose, { Schema } from "mongoose";

const BookSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  stock: {
    type: Number,
  },
  sbn: {
    type: String
  }
});

export default mongoose.model("Book", BookSchema);
