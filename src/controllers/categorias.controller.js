import { Prisma } from "../prisma.js";

export const crearCategoria = async (req, res) => {
  const data = req.body;
  try {
    const nuevaCategoria = await Prisma.categoria.create({
      data,
    });
    res.status(201).json({
      message: "Categoria creada exitosamente",
      content: nuevaCategoria,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const elminarCategoriaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const validarCategoria = await Prisma.categoria.findUnique({
      where: {
        categoria_id: Number(id),
      },
    });
    if (!validarCategoria) {
      return res.status(404).json({
        message: "Categoria no encontrada",
      });
    }
    const categoria = await Prisma.categoria.delete({
      where: {
        categoria_id: Number(id),
      },
    });
    res.status(200).json({
      message: "Categoria eliminada exitosamente",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await Prisma.categoria.findMany();
    res.status(201).json({
      message: "Lista de categorias",
      content: categorias,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const obtenerCategoriaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Prisma.categoria.findUnique({
      where: {
        categoria_id: Number(id),
      },
    });
    if (!categoria) {
      return res.status(404).json({
        message: "Categoria no encontrada",
      });
    }
    res.status(200).json({
      message: "Categoria encontrada",
      content: categoria,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const actualizarCategoriaPorId = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const categoria = await Prisma.categoria.findUnique({
      where: {
        categoria_id: Number(id),
      },
    });
    if (!categoria) {
      return res.status(404).json({
        message: "Categoria no encontrada",
      });
    }
    const updatedCategoria = await Prisma.categoria.update({
      where: {
        categoria_id: Number(id),
      },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
      },
    });
    res.status(201).json({
      message: "Categoria actualizado exitosamente",
      content: updatedCategoria,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
