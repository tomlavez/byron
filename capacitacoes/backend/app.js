import express from 'express'
import livroRouter from "./Routes/livro.routes.js"
import usuarioRouter from "./Routes/usuario.routes.js"
import initAdmin from "./utils/init.js";

const app = express()
const port = 3000

app.use(express.json())

app.use("/livros", livroRouter)
app.use("/usuarios", usuarioRouter)

app.listen(port, () => {
    initAdmin();
  
    console.log("Servidor rodando na porta " + port);
});