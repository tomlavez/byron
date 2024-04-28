import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const criarLivro = async (req, res) => {
    // verificando se o livro já existe
    const exists = await prisma.livro.findFirst({
        where: {
            titulo: req.body.titulo,
        },
    })

    // se o livro já existe, atualiza as informações
    if (exists){
        const livro = await prisma.livro.update({
            where: {
                id: exists.id,
            },
            data: {
                estoque: req.body.estoque,
                valor: req.body.valor
            }
        })
    
    res.json({
        data: livro,
        msg: "Estoque atualizado com sucesso!"
    })
    return
    }
        
    // se o livro não existe, ele é criado
    const livro = await prisma.livro.create({
        data: {
            titulo: req.body.titulo,
            autor: req.body.autor,
            estoque: req.body.estoque,
            valor: req.body.preco
        }
    })

    res.json({
        data: livro,
        msg: "Livro criado com sucesso!"
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

