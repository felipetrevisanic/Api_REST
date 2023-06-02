import livros from "../models/Livro.js";

class livroController {
    
    static listarLivros = async (req,res) =>{
        try {
            const livrosResultado = await livros.find()
                .populate('autor')
                .exec();
            res.status(200).json(livrosResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static listaLivroPorId = async (req,res) => {
        const id = req.params.id;

        try {
            const result = await livros.findById(id)
            .populate('autor', 'nome')
            .exec();
            res.send(result)
        } catch (error) {
            res.status(400).send({message: `${error} - id do livro não localizado`})
        }
    }

    static listarLivrosPorEditora = async (req,res) => {
        try {
            let editora = req.query.editora
            const result = await livros.find({'editora': editora}, {})
            res.send(result)   
        } catch (error) {
            res.status(400).send({message: `${error} - Não foi possível localizar nenhum livro da editora inserida`})
        }
    }

    static criarLivro = (req,res) => {
        let livro = new livros(req.body);

        try {
            livro.save()
            res.status(201).send(livro.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error} - falha ao cadastrar o livro`})
        }
    }

    static atualizarLivro = async (req,res) =>{
        
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'livro atualizado com sucesso'})
    
        } catch (error) {
            res.status(500).send({message: `${error} - falha ao atualizar o livro`})
        }
    }

    static excluirLivro = async (req,res) => {
            const id = req.params.id;

            try{
                await livros.findByIdAndDelete(id)
                res.status(200).send({message: 'livro removido com sucesso'})
            }catch(error){
                res.status(500).send({message: `${error} - falha ao remover o livro`})
            }
    }
}

export default livroController;