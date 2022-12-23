import express, { json } from "express";
import { reservacionesRouter } from "./routes/reservacion.router.js";
import { estadosRouter } from "./routes/estado.router.js";


const servidor = express();
servidor.use(json());

const PORT = process.env.PORT ?? 5000;

servidor.use(reservacionesRouter);
servidor.use(estadosRouter);

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en el peuerto ${PORT}`)
})