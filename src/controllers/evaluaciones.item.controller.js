import { EvaluacionesItems } from "../models/EvaluacionesItems.js";

export const getEvaluacionesItems = async (req, res) => {
  try {
    const evaluacionesItems= await EvaluacionesItems.findAll();
    res.json(evaluacionesItems);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEvaluacionesItem= async (req, res) => {
  try {
    const { id } = req.params;
    const evaluacionItem = await EvaluacionesItems.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!evaluacionItem) return res.status(404).json({message:"evaluacionItem no existe"});
    res.json(evaluacionItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEvaluacionesItems = async (req, res) => {
  const {evaluacion_item_Id,item_Id,cumple} = req.body;

  try {
    const newEvaluacionesItems = await EvaluacionesItems.create({
        evaluacion_item_Id,
        item_Id,
        cumple
      
    });

    res.json(newEvaluacionesItems);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEvaluacionesItems = async (req, res) => {
  try {
    const { id } = req.params;
    const evaluacionItem=await EvaluacionesItems.findOne({
      where:{id},
    });
    evaluacionItem.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await evaluacionItem.save();

    res.json(evaluacionItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEvaluacionesItems = async (req, res) => {
  try {
    const { id } = req.params;
    await EvaluacionesItems.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
