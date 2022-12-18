import { Router } from "express";
import { crearTipoUsuario } from "../controllers/tiposUsuarios.controller.js";

export const tiposUsuarioRouter = Router();

tiposUsuarioRouter.post("/tipo_usuarios", crearTipoUsuario)