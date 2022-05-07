import { EstandarMinimo } from "../models/EstandarMinimo.js";

export const getEstandares = async (req, res) => {
  try {
    const estandares = await EstandarMinimo.findAll();
    res.json(estandares);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstandar= async (req, res) => {
  try {
    const { id } = req.params;
    const estandar = await EstandarMinimo.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!estandar) return res.status(404).json({message:"estandar minimo no existe"});
    res.json(estandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEstandar = async (req, res) => {
  const { nombre,ciclo_Id} = req.body;

  try {
    const newEstandar = await EstandarMinimo.create({
      nombre,
      ciclo_Id
    });

    res.json(newEstandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEstandar = async (req, res) => {
  try {
    const { id } = req.params;
    const estandar=await EstandarMinimo.findOne({
      where:{id},
    });
    estandar.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await estandar.save();

    res.json(estandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEstandar = async (req, res) => {
  try {
    const { id } = req.params;
    await EstandarMinimo.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
