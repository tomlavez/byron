import express from 'express'
import * as usuarioController from '../Controllers/usuario.controllers.js'

const router = express.Router()

router.get('/', usuarioController.getUsuario)

router.get('/:usuarioId', usuarioController.getUsuarioPorId)

router.post('/', usuarioController.criarUsuario)

router.put('/:usuarioId', usuarioController.atualizarUsuario)

router.delete('/:usuarioId', usuarioController.deletarUsuario)

router.post("/login", usuarioController.login); // rota para login do usuário

export default router
