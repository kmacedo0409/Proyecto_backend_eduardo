import { Router } from "express";
import {
    actualizarReservacionPorId,
    crearReservacion,
    elminarReservacionPorId,
    listarReservaciones,
    obtenerReservacionPorId,
} from "../controllers/reservaciones.controller.js";

export const reservacionesRouter = Router();

reservacionesRouter.post("/reservaciones", crearReservacion);

reservacionesRouter.get("/reservaciones", listarReservaciones);

reservacionesRouter.get("/reservaciones/:id", obtenerReservacionPorId);

reservacionesRouter.delete("/reservaciones/:id", elminarReservacionPorId);

reservacionesRouter.put("/reservaciones/:id", actualizarReservacionPorId);
