import { Router } from "express";
import {
  actualizarCategoriaPorId,
  crearCategoria,
  elminarCategoriaPorId,
  listarCategorias,
  obtenerCategoriaPorId,
} from "../controllers/categorias.controller.js";

export const categoriasRouter = Router();

categoriasRouter.post("/categorias", crearCategoria);

categoriasRouter.get("/categorias", listarCategorias);

categoriasRouter.get("/categorias/:id", obtenerCategoriaPorId);

categoriasRouter.delete("/categorias/:id", elminarCategoriaPorId);

categoriasRouter.put("/categorias/:id", actualizarCategoriaPorId);
