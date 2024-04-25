import { PrismaClient } from "@prisma/client";
import generateToken from "../utils/jwt.js";

const prisma = new PrismaClient()

export const criarUsuario = async (req, res) => {
    const existe = await prisma.usuario.findFirst({
        where: {
            email: req.body.email,
        }
    })

    if (existe)
        return res.status(400).json({
            data: existe,
            msg: "Email já cadastrado. O email é uma chave única e não pode ser cadastrada duas vezes."
        }) 


    const usuario = await prisma.usuario.create({
        data: {
            email: req.body.email,
            senha: req.body.senha,
            role: req.body.role,
            perfil: {
                create: {
                    nome: req.body.nome,
                    telefone: req.body.telefone
                },
            },
            pedido: {
                create: {
                    valor: 0,
                    livro: { create: [] },
                },
            },
        },
    })

    const token = generateToken(usuario); // gerando token de acesso

    res.status(201).json({
        // retornando informações do usuário criado
        data: usuario,
        token: token,
        msg: "Usuário criado com sucesso!",
    });

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

export const login = async (req, res) => {
    const user = await prisma.usuario.findFirst({
      // buscando usuário com esse email e senha
      where: {
        AND: {
          email: req.body.email,
          senha: req.body.senha,
        },
      },
    });
  
    if (user === null) {
      // nenhum usuário encontrado
      return res.status(403).json({
        msg: "Email ou senha incorretos.",
      });
    }
  
    const token = generateToken(user); // gerando o token de acesso
    res.json({
      // deu tudo certo, o usuário foi logado
      data: user,
      token: token,
      msg: "Login realizado com sucesso!",
    });
  };