import mongoose, { SchemaType, SchemaTypes } from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: SchemaTypes.ObjectId},
    titulo: {type: String, required: true},
    autor: {type: SchemaTypes.ObjectId, ref: 'autores' ,required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
});

const livros = mongoose.model('livros', livroSchema);

export default livros;