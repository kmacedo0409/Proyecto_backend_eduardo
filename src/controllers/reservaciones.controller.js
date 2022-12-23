import { Prisma } from "../prisma.js";

export const crearReservacion = async (req, res) => {
    const data = req.body;
    try{
        const nuevaReservacion = await Prisma.reservacion.create({
            data,
    
        });
        
        res.status(201).json({
            message: "reservacion creada exitosamente",
            content: nuevaReservacion,
        });

    } catch (error) {
        
        res.status(400).json({
            message: "Error al crear la reservacion",
            error: error.message
        });
    }
};

export const listarReservaciones = async (req, res) => {
    try {
        const reservaciones = await Prisma.reservacion.findMany();
        
        res.status(201).json({
            message: "Lista de reservaciones",
            content: reservaciones,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const obtenerReservacionPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const reservacion = await Prisma.reservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!reservacion) {
            return res.status(404).json({
            message: "Reservacion no encontrada",
            });
        }
        res.status(200).json({
            message: "Reservacion encontrada",
            content: reservacion,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const actualizarReservacionPorId = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const buscarReservacion = await Prisma.reservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!buscarReservacion) {
            return res.status(404).json({
            message: "Reservacion no encontrada",
            });
        };
        const reservacion = await Prisma.reservacion.update({
            where: {
                categoria_id: Number(id),
            },

            data,
        });
        res.status(201).json({
            message: "Reservacion actualizado exitosamente",
            content: reservacion,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};

export const elminarReservacionPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const validarReservacion = await Prisma.reservacion.findUnique({
            where: {
            id: Number(id),
            },
        });
        if (!validarReservacion) {
            return res.status(404).json({
            message: "Reservacion no encontrada",
            });
        }
        const reservacion = await Prisma.reservacion.delete({
            where: {
            id: Number(id),
            },
        });
        res.status(200).json({
            message: " Reservacion eliminada exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor",
            error: error.message,
        });
    }
};
