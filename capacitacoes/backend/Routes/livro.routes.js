import express from 'express'
import * as livroController from '../Controllers/livro.controllers.js'

const router = express.Router()

router.get('/', livroController.getLivros)

router.get('/:livroId', livroController.getLivroPorId)

router.post('/', livroController.criarLivro)

router.put('/:livroId', livroController.atualizarEstoque)

router.delete('/:livroId', livroController.deletarLivro)

export default router