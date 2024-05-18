import {Schema, model, Document} from 'mongoose';


interface IGroceryItem extends Document {
    name:string;
    price: number;
}