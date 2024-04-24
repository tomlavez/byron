import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const criarUsuario = async (req, res) => {
    const usuario = await prisma.usuario.create({
        data: {
            email: req.body.email,
            senha: req.body.senha,
            role: req.body.role,
            perfil: {
                create: {
                    nome: req.body.nome,
                    telefone: req.body.telefone
                }
            }
        }
    })

    res.json({
        data: usuario,
        msg: "Usuário criado com sucesso!"
    })

}

export const getUsuario = async (req, res) => {
    const usuarios = await prisma.usuario.findMany({
        where: {
            perfil: {
                nome: {
                    contains: req.query.nome
                }
            }
        },
        include: {
            perfil: true
        }
    })

    res.json({
        data: usuarios,
        msg: "Usuários encontrados com sucesso!"
    })

}

export const getUsuarioPorId = async (req, res) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: parseInt(req.params.usuarioId)
        }
    })

    res.json({
        data: usuario,
        msg: "Usuário encontrado com sucesso!"
    })

}

export const atualizarUsuario = async (req, res) => {
    const usuario = await prisma.usuario.update({
        where: {
            id: parseInt(req.params.usuarioId)
        },
        data: {
            email: req.body.email,
            perfil: {
                update: {
                    nome: req.body.nome,
                    telefone: req.body.telefone
                }
            }
        }
    })

    res.json({
        data: usuario,
        msg: "Usuário e perfil atualizados com sucesso!"
    })

}

export const deletarUsuario = async (req, res) => {
    const usuarioDeletado = await prisma.perfil.deleteMany({
        where: {
            Usuario: {
                id: parseInt(req.params.usuarioId)
            }
        }
    })

    res.json({
        msg: "Usuário deletado com sucesso!"
    })

}