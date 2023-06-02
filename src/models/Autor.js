import mongoose, { Schema, SchemaType, SchemaTypes } from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: SchemaTypes.ObjectId},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model('autores', autorSchema)

export default autores;