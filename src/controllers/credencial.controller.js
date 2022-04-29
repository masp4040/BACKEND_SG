import { Credencial } from "../models/Credencial.js";
import { Representante } from "../models/Representante.js";

export const getCredenciales = async (req, res) => {
  try {
    const credenciales = await Credencial.findAll();
    res.json(credenciales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCredencial = async (req, res) => {
  try {
    const { id } = req.params;
    const credencial = await Credencial.findOne({
      where: {
        id,
      },
    });

    if (!credencial) return res.status(404).json({message:"credencial no existe"});
    res.json(credencial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCredencial = async (req, res) => {
  
  const { correo,password} = req.body;
  

  try {
    const newCredencial = await Credencial.create({
      correo,
      password,
      
    });

    res.json(newCredencial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCredencial = async (req, res) => {
  try {
    const { id } = req.params;
    const { correo, password } = req.body;

    const credencial = await Credencial.findByPk(id);
    credencial.correo = correo;
    credencial.password = password;
    
    await credencial.save();

    res.json(credencial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCredencial = async (req, res) => {
  try {
    const { id } = req.params;
    await Credencial.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCredencialRepresentante=async(req,res)=>{
  const {id}=req.params
  const representante=await Representante.findAll({
    where:{credencialId:id}
  })
  res.json(representante)
}
