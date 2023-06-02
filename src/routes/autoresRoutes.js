import express from "express";
import autorController from "../controllers/autorController.js";

const router = express.Router()

router
    .get('/autores', autorController.listarAutor)
    .get('/autores/:id', autorController.listarAutorPorId)
    .post('/autores', autorController.criarAutor)
    .put('/autores/:id', autorController.atualizaAutor)
    .delete('/autores/:id', autorController.excluirAutor)

export default router; 