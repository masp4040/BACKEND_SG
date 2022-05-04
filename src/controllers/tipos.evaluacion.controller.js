import { TipoEvaluacion } from "../models/TipoEvaluacion.js";

export const getTipoEvaluaciones = async (req, res) => {
  try {
    const tiposEvaluaciones = await Tipo.findAll();
    res.json(tiposEvaluaciones);
  } catch (error) {
    return res.status(500).json({ message: 'No existen tipos de evaluaciones' });
  }
};

export const getTipoEvaluacion= async (req, res) => {
  try {
    const { id } = req.params;
    const TipoEvaluacion = await TipoEvaluacion.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!TipoEvaluacion) return res.status(404).json({message:"tipo evaluacion no existe"});
    res.json(TipoEvaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTipoEvaluacion = async (req, res) => {
  const { tipo} = req.body;

  try {
    const newTipoEvaluacion = await TipoEvaluacion.create({
      tipo
      
    });

    res.json(newTipoEvaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTipoEvaluacion = async (req, res) => {
  try {
    const { id } = req.params;
    const tiposEvaluacion=await TipoEvaluacion.findOne({
      where:{id},
    });
    TipoEvaluacion.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await TipoEvaluacion.save();

    res.json(tiposEvaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTipoEvaluacion = async (req, res) => {
  try {
    const { id } = req.params;
    await TipoEvaluacion.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
