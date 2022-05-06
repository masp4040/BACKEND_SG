import {Ciclo} from "../models/Ciclo.js";

export const getCiclos = async (req, res) => {
  try {
    const ciclos = await Ciclo.findAll();
    res.json(ciclos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCiclo= async (req, res) => {
  try {
    const { id } = req.params;
    const ciclo = await Ciclo.findOne({
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

export const createCiclo = async (req, res) => {
  const { ciclo} = req.body;

  try {
    const newCiclo = await Ciclo.create({
      ciclo
      
    });

    res.json(newCiclo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCiclo = async (req, res) => {
  try {
    const { id } = req.params;
    const ciclo=await Ciclo.findOne({
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
export const deleteCiclo = async (req, res) => {
  try {
    const { id } = req.params;
    await Ciclo.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
