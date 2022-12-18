import express, { json } from "express"
import { categoriasRouter } from "./routes/categoria.router.js";

const servidor = express()

servidor.use(json())

const PORT = process.env.PORT ?? 5000;

servidor.use(categoriasRouter)

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en el peuerto ${PORT}`)
})