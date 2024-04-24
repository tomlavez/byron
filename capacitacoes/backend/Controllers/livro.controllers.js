import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const criarLivro = async (req, res) => {
    const livro = await prisma.livro.create({
        data: {
            titulo: req.body.titulo,
            autor: req.body.autor,
            estoque: req.body.estoque
        }
    })

    res.json({
        data: livro,
        msg: "Livro criado com sucesso!"
    })
}

export const atualizarEstoque = async (req, res) => {
    const livro = await prisma.livro.update({
        where: {
            id: parseInt(req.params.livroId)
        },
        data: {
            estoque: req.body.estoque
        }
    })

    res.json({
        data: livro,
        msg: "Estoque atualizado com sucesso!"
    })
}

export const getLivros = async (req, res) => {
    const livros = await prisma.livro.findMany({
        where: {
            titulo: {
                contains: req.query.titulo
            },
            autor: {
                contains: req.query.autor
            }
        }
    })

    res.json({
        data: livros,
        msg: "Livros encontrados com sucesso!"
    })
}

export const getLivroPorId = async (req, res) => {
    const livro = await prisma.livro.findUnique({
        where: {
            id: parseInt(req.params.livroId)
        }
    })

    res.json({
        data: livro,
        msg: "Livro encontrado com sucesso!"
    })
}

export const deletarLivro = async (req, res) => {
    const livroDeletado = await prisma.livro.delete({
        where: {
            id: parseInt(req.params.livroId)
        }
    })

    res.json({
        msg: "Livro deletado com sucesso!"
    })
}

