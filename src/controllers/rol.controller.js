import { Rol } from "../models/Rol.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRol= async (req, res) => {
  try {
    const { id } = req.params;
    const rol = await Rol.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!rol) return res.status(404).json({message:"rol no existe"});
    res.json(rol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRol = async (req, res) => {
  const { rol,credencialId} = req.body;

  try {
    const newRol = await Rol.create({
      rol,
      credencialId
    });

    res.json(newRol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRol = async (req, res) => {
  try {
    const { id } = req.params;
    const rol=await Rol.findOne({
      where:{id},
    });
    rol.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await rol.save();

    res.json(rol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteRol = async (req, res) => {
  try {
    const { id } = req.params;
    await Rol.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
