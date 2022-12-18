import express, { json } from "express"
import { categoriasRouter } from "./routes/categoria.router.js";
import { tiposUsuarioRouter } from "./routes/tipoUsuario.router.js";
import { UsuarioRouter } from "./routes/usuario.router.js";

const servidor = express()

servidor.use(json())

const PORT = process.env.PORT ?? 5000;

servidor.use(categoriasRouter)
servidor.use(tiposUsuarioRouter)
servidor.use(UsuarioRouter)

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en el peuerto ${PORT}`)
})