import autores from "../models/Autor.js";

class autorController{
    
    static listarAutor = async (req,res) => {
        try {
            const listar = await autores.find()
            res.status(200).json(listar)
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possível listar os autores`})
        }
    }

    static listarAutorPorId = async (req,res) => {
        const id = req.params.id
        try {
            const result = await autores.findById(id)
            res.send(result)
        } catch (error) {
            res.status(400).send({message: `${error} - não foi possível encontrar este autor`})
        }
    }

    static criarAutor = async (req,res) => {
        let autor = new autores(req.body);
        try {
            autor.save()
            res.status(201).send(autor.toJSON())
        } catch (error) {
            res.status(500).send({massage: `${error} O autor não foi possível cadastrar o autor`})
        }
    }

    static atualizaAutor = async (req,res) => {
        try {
            const id = req.params.id
            await autores.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({massage: `O autor foi atualizado com sucesso`})
        } catch (error) {
            res.status(500).send({massage: `${error} Não foi possível atualizar o autor desejado`})
        }
    }

    static excluirAutor = async (req,res) => {
        try {
            const id = req.params.id
            await autores.findByIdAndDelete(id)
            res.status(200).send({massage: `O autor foi excluido com sucesso`})
        } catch (error) {
            res.status(500).send({massage: `${error} - Não foi possível excluir este autor`})
        }
    }
}

export default autorController;