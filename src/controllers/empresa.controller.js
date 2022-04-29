import { Empresa } from "../models/Empresa.js";

export const getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmpresa= async (req, res) => {
  try {
    const { id } = req.params;
    const empresa = await Empresa.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!empresa) return res.status(404).json({message:"empresa no existe"});
    res.json(empresa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEmpresa = async (req, res) => {
  const { nit, razon_social,direccion,telefono,codigo_CIUU} = req.body;

  try {
    const newEmpresa = await Empresa.create({
      nit,
      razon_social,
      direccion,
      codigo_CIUU
      
    });

    res.json(newEmpresa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const empresa=await Empresa.findOne({
      where:{id},
    });
    empresa.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await empresa.save();

    res.json(empresa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    await Empresa.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
