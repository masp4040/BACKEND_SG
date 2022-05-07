import { ItemEstandar } from "../models/ItemEstandar.js";

export const getItems = async (req, res) => {
  try {
    const items = await ItemEstandar.findAll();
    res.json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getItemEstandar= async (req, res) => {
  try {
    const { id } = req.params;
    const itemEstandar = await ItemEstandar.findOne({
      where: {
        id,
      },
      //attributes:['nombres']
    });

    if (!itemEstandar) return res.status(404).json({message:"itemEstandar no existe"});
    res.json(itemEstandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createItemEstandar = async (req, res) => {
  const {tipo_evaluacion_Id,subestandar_Id,numeral,marco_legal,criterio_aceptacion,modo_verificacion,valor,descripcion} = req.body;

  try {
    const newItemEstandar = await ItemEstandar.create({
        tipo_evaluacion_Id,
        subestandar_Id,
        numeral,
        marco_legal,
        criterio_aceptacion,
        modo_verificacion,
        valor,
        descripcion
      
    });

    res.json(newItemEstandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateItemEstandar = async (req, res) => {
  try {
    const { id } = req.params;
    const itemEstandar=await ItemEstandar.findOne({
      where:{id},
    });
    itemEstandar.set(req.body);
    // const { nombres, apellidos,cedula ,credencialId} = req.body;

    // const representante = await Representante.findByPk(id);
    // representante.nombres = nombres;
    // representante.apellidos = apellidos;
    // representante.cedula = cedula;
    // representante.credencialId=credencialId;
    await itemEstandar.save();

    res.json(itemEstandar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteItemEstandar = async (req, res) => {
  try {
    const { id } = req.params;
    await ItemEstandar.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
