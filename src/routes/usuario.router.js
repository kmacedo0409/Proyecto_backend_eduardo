import { Router } from "express";
import { crearUsuario, obtenerUsuarioPorId } from "../controllers/usuario.controller.js";

export const UsuarioRouter = Router();

UsuarioRouter.post("/usuarios", crearUsuario)

UsuarioRouter.get("/usuarios/:id", obtenerUsuarioPorId)