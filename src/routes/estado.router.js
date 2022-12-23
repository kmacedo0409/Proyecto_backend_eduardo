import { Router } from "express";
import { actualizarEstadoPorId, crearEstado, elminarEstadoPorId, listarEstados, obtenerEstadoPorId } from "../controllers/estado.controller.js";

export const estadosRouter = Router();

estadosRouter.post("/estados", crearEstado);

estadosRouter.get("/estados", listarEstados);

estadosRouter.get("/estados/:id", obtenerEstadoPorId);

estadosRouter.delete("/estados/:id", elminarEstadoPorId);

estadosRouter.post("/estados/:id", actualizarEstadoPorId);
