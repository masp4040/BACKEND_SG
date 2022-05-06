import { Representante } from "../models/Representante.js";

export const getRepresentantes = async (req, res) => {
  try {
    const representantes = await Representante.findAll();
    res.json(representantes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRepre= async (req, res) => {
  try {
    const { id } = req.params;
    const representante = await Representante.findOne({
      where: {
        id,
      },
      attributes:['nombres']
    });

    if (!representante) return res.status(404).json({message:"representante no existe"});
    res.json(representante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRepresentante = async (req, res) => {
  const { nombres, apellidos,cedula ,credencialId} = req.body;

  try {
    const newRepresentante = await Representante.create({
      nombres,
      apellidos,
      cedula,
      credencialId
    });

    res.json(newRepresentante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRepresentante = async (req, res) => {
  try {
    const { id } = req.params;
    const representante=await Representante.findOne({
      where:{id},
    });
    representante.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await representante.save();

    res.json(representante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteRepresentante = async (req, res) => {
  try {
    const { id } = req.params;
    await Representante.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
