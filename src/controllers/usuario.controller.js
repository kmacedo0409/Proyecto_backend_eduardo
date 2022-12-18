import { Prisma } from "../prisma.js";

export const crearUsuario = async (req, res) => {
  const data = req.body;
  try {
    const nuevoUsuario = await Prisma.usuario.create({
      data,
    });
    res.status(201).json({
      message: "Usuario creado exitosamente",
      content: nuevoUsuario,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Prisma.usuario.findUnique({
      where: {
        usuari_id: Number(id),
      },
      include: {
        tipoUsuario: true
      }
    });
    if (!usuario) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
    res.status(200).json({
      message: "Usuario encontrado",
      content: usuario,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
