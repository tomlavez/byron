// criar um usuario administrador para poder criar os produtos mais facilmente durante o desenvolvimento

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initAdmin = async () => {
  // verificando se o usuário existe
  const exists = await prisma.usuario.findFirst({
    where: {
      email: "admin@gmail.com",
    },
  });

  if (exists)
    // se o email já foi cadastrado, ele não pode ser cadastrado novamente
    return console.log(
      "Para utilizar as funções de administrador, faça login com o email: admin@gmail.com e a senha: admin1234 e utilize o token gerado para fazer as requisições"
    );

  const user = await prisma.usuario.create({
    // criando o usuário
    data: {
        // as informações serão enviadas no body da requisição
        email: "admin@gmail.com",
        senha: "admin1234",
        role: true,
        pedido: {
            create: {
                valor: 0,
                livro: { create: [] },
            },
        },
        perfil: {
            create: {
                nome: "admin show de bola",
                telefone: "1234-5678",
                },
            },
        },
    });

  console.log({
    // retornando informações do usuário criado
    data: user,
    msg: "Admin criado com sucesso!",
  });
};

export default initAdmin;