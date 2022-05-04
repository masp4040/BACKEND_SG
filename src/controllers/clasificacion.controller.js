import {Clasificacion} from "../models/Clasificacion.js";

export const getClasificaciones = async (req, res) => {
  try {
    const clasificaciones = await Clasificacion.findAll();
    res.json(clasificaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClasificacion= async (req, res) => {
  try {
    const { id } = req.params;
    const clasificacion = await Clasificacion.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!clasificacion) return res.status(404).json({message:"clasificacion no existe"});
    res.json(clasificacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClasificacion = async (req, res) => {
  const { num_empleados,
    nivel_riesgo,
    fecha,
    tipo_evaluacion_id,
    tipo_responsable_id,
    empresa_id,
    num_estandares
  } = req.body;

  try {
    const newClasificacion = await Clasificacion.create({
        num_empleados,
        nivel_riesgo,
        fecha,
        tipo_evaluacion_id,
        tipo_responsable_id,
        empresa_id,
        num_estandares
      
      
    });

    res.json(newClasificacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClasificacion = async (req, res) => {
  try {
    const { id } = req.params;
    const clasificacion=await Clasificacion.findOne({
      where:{id},
    });
    rol.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await clasificacion.save();

    res.json(clasificacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteClasificacion = async (req, res) => {
  try {
    const { id } = req.params;
    await Clasificacion.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
