import { Responsable } from "../models/Responsable.js";

export const getResponsables = async (req, res) => {
  try {
    const responsables = await Responsable.findAll();
    res.json(responsables);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getResponsable= async (req, res) => {
  try {
    const { id } = req.params;
    const responsable = await Responsable.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!responsable) return res.status(404).json({message:"responsable no existe"});
    res.json(responsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createResponsable = async (req, res) => {
  const { nombres, apellidos,cedula ,credencialId} = req.body;

  try {
    const newResponsable = await Responsable.create({
      nombres,
      apellidos,
      cedula,
      credencialId
    });

    res.json(newResponsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateResponsable = async (req, res) => {
  try {
    const { id } = req.params;
    const responsable=await Responsable.findOne({
      where:{id},
    });
    responsable.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const responsable = await Responsable.findByPk(id);
    // responsable.nombres = nombres;
    // responsable.apellidos = apellidos;
    // responsable.cedula = cedula;
    // responsable.credencialId=credencialId;
    await responsable.save();

    res.json(responsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteResponsable = async (req, res) => {
  try {
    const { id } = req.params;
    await Responsable.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
