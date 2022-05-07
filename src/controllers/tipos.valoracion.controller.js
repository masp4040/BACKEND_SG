import { TipoValoracion } from "../models/TipoValoracion.js";

export const getTipoValoraciones = async (req, res) => {
  try {
    const tiposValoraciones = await Tipo.findAll();
    res.json(tiposValoraciones);
  } catch (error) {
    return res.status(500).json({ message: 'No existen tipos de valoraciones' });
  }
};

export const getTipoValoracion= async (req, res) => {
  try {
    const { id } = req.params;
    const tipoValoracion = await TipoValoracion.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!tipoValoracion) return res.status(404).json({message:"tipo de valoracion no existe"});
    res.json(tipoValoracion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTipoValoracion = async (req, res) => {
  const { tipo,min,max} = req.body;

  try {
    const newTipoValoracion = await TipoValoracion.create({
      tipo,
      min,
      max
      
    });

    res.json(newTipoValoracion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipoValoracion = async (req, res) => {
  try {
    const { id } = req.params;
    const tiposValoracion=await TipoValoracion.findOne({
      where:{id},
    });
    TipoValoracion.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await TipoValoracion.save();

    res.json(tiposValoracion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTipoValoracion = async (req, res) => {
  try {
    const { id } = req.params;
    await TipoValoracion.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
