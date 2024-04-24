import express from 'express'
import livroRouter from "./Routes/livro.routes.js"
import usuarioRouter from "./Routes/usuario.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/livros", livroRouter)
app.use("/usuarios", usuarioRouter)

app.listen(port, () => {
    console.log(`A nossa API está rodando na porta ${port}`)
})