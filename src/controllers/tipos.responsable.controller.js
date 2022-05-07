import { TipoResponsable } from "../models/TipoResponsable.js";

export const getTipoResponsables = async (req, res) => {
  try {
    const tiposResponsables = await TipoResponsable.findAll();
    res.json(tiposResponsables);
  } catch (error) {
    return res.status(500).json({ message: 'No existen tipos de responsables' });
  }
};

export const getTipoResponsable= async (req, res) => {
  try {
    const { id } = req.params;
    const tipoResponsable = await TipoResponsable.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!tipoResponsable) return res.status(404).json({message:"tipo de responsable no existe"});
    res.json(tipoResponsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTipoResponsable = async (req, res) => {
  const { tipo} = req.body;

  try {
    const newTipoResponsable = await TipoResponsable.create({
      tipo
      
    });

    res.json(newTipoResponsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipoResponsable = async (req, res) => {
  try {
    const { id } = req.params;
    const tiposResponsable=await TipoResponsable.findOne({
      where:{id},
    });
    TipoResponsable.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await TipoResponsable.save();

    res.json(tiposResponsable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTipoResponsable = async (req, res) => {
  try {
    const { id } = req.params;
    await TipoResponsable.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
