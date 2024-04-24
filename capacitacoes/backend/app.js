import express from 'express'
import livroRouter from "./Routes/livro.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/livros", livroRouter)

app.listen(port, () => {
    console.log(`A nossa API está rodando na porta ${port}`)
})