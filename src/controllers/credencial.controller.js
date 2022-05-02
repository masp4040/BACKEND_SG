import { Credencial } from "../models/Credencial.js";
import { Representante } from "../models/Representante.js";
import bcrypt from 'bcrypt'

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
  
  const { correo,password,activo,rolId} = req.body;
  

  try {
    
    

    const newCredencial = await Credencial.create({
      correo,
      password,
      activo,
      rolId
      
    });
    
    const salt = await bcrypt.genSalt(8);
    newCredencial.password = await bcrypt.hash(password, salt);
    await newCredencial.save();

    res.json(newCredencial);
  } catch (error) {
    return res.status(500).json({ message: "el usuario ya existe" });
  }
};

export const updateCredencial = async (req, res) => {
  try {
    const { id } = req.params;
    const { correo, password,activo,rolId} = req.body;
    // const credencial=await Credencial.findOne({
    //   where:{id},
    //});
    //credencial.set(req.body);
    //const { correo, password} = req.body;

    const credencial = await Credencial.findByPk(id);
    credencial.correo = correo;
    credencial.password = password;
    credencial.activo = activo;
    credencial.rolId = rolId;
    
    
    const salt = await bcrypt.genSalt(8);
    credencial.password = await bcrypt.hash(password, salt);
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
 try {
  const {id}=req.params
  const representante=await Representante.findAll({
    where:{credencialId:id}
  })
  res.json(representante)
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
}
