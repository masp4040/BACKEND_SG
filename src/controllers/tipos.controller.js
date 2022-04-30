import { Tipo } from "../models/Tipo_responsable.js";

export const getRoles = async (req, res) => {
  try {
    const tipos = await Tipo.findAll();
    res.json(tipos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRol= async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await Tipo.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!rol) return res.status(404).json({message:"tipo no existe"});
    res.json(tipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTipo = async (req, res) => {
  const { tipo} = req.body;

  try {
    const newTipo = await Tipo.create({
      rol,
      credencialId
    });

    res.json(newTipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo=await Tipo.findOne({
      where:{id},
    });
    rol.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await tipo.save();

    res.json(tipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTipo = async (req, res) => {
  try {
    const { id } = req.params;
    await Tipo.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
