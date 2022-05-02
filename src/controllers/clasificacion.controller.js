import {Clasificacion} from "../models/Clasificacion.js";

export const getClasificacions = async (req, res) => {
  try {
    const clasificaciones = await Clasificacion.findAll();
    res.json(clasificaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClasificacion= async (req, res) => {
  try {
    const { id } = req.params;
    const ciclo = await Clasificacion.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!ciclo) return res.status(404).json({message:"ciclo no existe"});
    res.json(ciclo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClasificacion = async (req, res) => {
  const { ciclo} = req.body;

  try {
    const newClasificacion = await Rol.create({
      ciclo
      
    });

    res.json(newClasificacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClasificacion = async (req, res) => {
  try {
    const { id } = req.params;
    const ciclo=await Clasificacion.findOne({
      where:{id},
    });
    rol.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await ciclo.save();

    res.json(ciclo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteClasificacion = async (req, res) => {
  try {
    const { id } = req.params;
    await Clasificacion.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
