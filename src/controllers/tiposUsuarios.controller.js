import { Prisma } from "../prisma.js";

export const crearTipoUsuario = async (req, res) => {
  const data = req.body;
  try {
    const nuevoTipoUsuario = await Prisma.tipoUsuario.create({
      data,
    });
    res.status(201).json({
      message: "Tipo de usuario creado exitosamente",
      content: nuevoTipoUsuario,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};