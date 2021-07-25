//aquí se modelan los datos
import { Schema } from 'mongoose'

export const productSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    imageURL: String,
    price: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
});