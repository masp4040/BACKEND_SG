import { Evaluacion } from "../models/Evaluacion.js";

export const getEvaluaciones = async (req, res) => {
  try {
    const evaluaciones = await Evaluacion.findAll();
    res.json(evaluaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEvaluacion= async (req, res) => {
  try {
    const { id } = req.params;
    const evaluacion = await Evaluacion.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!evaluacion) return res.status(404).json({message:"evaluacion no existe"});
    res.json(evaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEvaluacion = async (req, res) => {
  const {clasificacion_Id,puntaje,descripcion,tipo_Valoracion_Id,fecha,cantidad_estandares_cumplidos,cantidad_estandares_NC,} = req.body;

  try {
    const newEvaluacion = await Evaluacion.create({
        clasificacion_Id,
        puntaje,
        descripcion,
        tipo_Valoracion_Id,
        fecha,
        cantidad_estandares_cumplidos,
        cantidad_estandares_NC
      
    });

    res.json(newEvaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEvaluacion = async (req, res) => {
  try {
    const { id } = req.params;
    const evaluacion=await Evaluacion.findOne({
      where:{id},
    });
    evaluacion.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await evaluacion.save();

    res.json(evaluacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEvaluacion = async (req, res) => {
  try {
    const { id } = req.params;
    await Evaluacion.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
