import { Schema, model } from 'mongoose';

const urlSchema = new Schema(
  {
    createdAt: { type: Date, default: Date.now },
    long: { type: String, required: true, unique: true },
    short: { type: String, required: true, unique: true },
    accessCount: { type: Number, default: 0 }
  },
  { collection: 'urls' }
);

const Url = model('Url', urlSchema);

export default Url;
