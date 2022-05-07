import { Subestandar } from "../models/Subestandar.js";

export const getSubestandares = async (req, res) => {
  try {
    const subestandares = await Subestandar.findAll();
    res.json(subestandares);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSubestandar= async (req, res) => {
  try {
    const { id } = req.params;
    const subestandar = await Subestandar.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!subestandar) return res.status(404).json({message:"subestandar no existe"});
    res.json(subestandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSubestandar = async (req, res) => {
  const { nombre,estandar_minimo_Id} = req.body;

  try {
    const newSubestandar = await Subestandar.create({
      nombre,
      estandar_minimo_Id
    });

    res.json(newSubestandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSubestandar = async (req, res) => {
  try {
    const { id } = req.params;
    const subestandar=await Subestandar.findOne({
      where:{id},
    });
    subestandar.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await subestandar.save();

    res.json(subestandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteSubestandar = async (req, res) => {
  try {
    const { id } = req.params;
    await Subestandar.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
