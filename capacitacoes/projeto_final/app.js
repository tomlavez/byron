import express from "express"

const app = express()
const port = 3000

app.use(express.json())

app.use("/", controller.funcao)

app.listen(port, () => {
    console.log(`A nossa API está rodando na porta ${port}`)
})