import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get('/livros', livroController.listarLivros)
    .get('/livros/busca', livroController.listarLivrosPorEditora)
    .get('/livros/:id', livroController.listaLivroPorId)
    .post('/livros', livroController.criarLivro)
    .put('/livros/:id', livroController.atualizarLivro)
    .delete('/livros/:id', livroController.excluirLivro)

export default router;