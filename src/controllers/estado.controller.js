import { Prisma } from "../prisma.js";

export const crearEstado = async (req, res) => {
    const data = req.body;
    try {
        const nuevoEstado = await Prisma.estadoReservacion.create({
            data,
        });
        res.status(201).json({
            message: "Estado creado exitosamente",
            content: nuevoEstado,
        });

    } catch (error) {
        res.status(400).json({
            message: "Error al crear el estado",
            error: error.message
        });
    }
    
};

export const listarEstados = async(req, res) => {
    try {
        const estados = await Prisma.estadoReservacion.findMany();
        
        res.status(201).json({
            message: "Lista de reservaciones",
            content: estados,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const obtenerEstadoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const estado = await Prisma.estadoReservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!estado) {
            return res.status(404).json({
            message: "Estado no encontrada",
            });
        }
        res.status(200).json({
            message: "Estado encontrado",
            content: reservacion,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const actualizarEstadoPorId = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const buscarEstado = await Prisma.estadoReservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!buscarEstado) {
            return res.status(404).json({
            message: "Estado no encontrado",
            });
        };
        const estado = await Prisma.estadoReservacion.update({
            where: {
                categoria_id: Number(id),
            },

            data,
        });
        res.status(201).json({
            message: "Estado actualizado exitosamente",
            content: estado,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const elminarEstadoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const validarEstado = await Prisma.estadoReservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!validarEstado) {
            return res.status(404).json({
            message: "Estado no encontrado",
            });
        }
        const estado = await Prisma.estadoReservacion.delete({
            where: {
            id: Number(id),
            },
        });
        res.status(200).json({
            message: " Estado eliminada exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};


