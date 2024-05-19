// src/models/grocery.ts
import mongoose, { Document, Schema } from 'mongoose';

interface Grocery extends Document {
  name: string;
  price: number;
  inventory: number;
}

const GrocerySchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true, default: 0 }
});

export default mongoose.model<Grocery>('Grocery', GrocerySchema);
