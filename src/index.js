import express, { json } from "express"

const servidor = express()

const PORT = process.env.PORT ?? 5000;


servidor.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en el peuerto ${PORT}`)
})