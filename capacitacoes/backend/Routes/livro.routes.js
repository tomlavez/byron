import express from 'express'
import * as livroController from '../Controllers/livro.controllers.js'
import adminLevel from "../middlewares/admin.middleware.js"

const router = express.Router()

router.get('/', livroController.getLivros)

router.get('/:livroId', livroController.getLivroPorId)

router.post('/', adminLevel, livroController.criarLivro)

router.put('/:livroId', adminLevel, livroController.atualizarEstoque)

router.delete('/:livroId', adminLevel, livroController.deletarLivro)

export default router