//import { Usuario } from "../models/Usuario.js";
import {Usuario} from "../models/Usuario.js"
import { Representante } from "../models/Representante.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//listar todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//buscar un usuario por correo
export const getUsuario = async (req, res) => {
  try {
    const { correo } = req.params;
    const usuario = await Usuario.findOne({
      where: {
        correo,
      },

      //atributtes:['nombres']
    })

    if (!usuario) return res.status(404).json({message:"Usuario no existe"});
        res.json(usuario);
        
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//crear un usuario
export const createUsuario = async (req, res) => {
  
  const { correo,password,activo,rol_Id} = req.body;
  

  try {

    

    const newUsuario = await Usuario.create({
      correo,
      password,
      activo,
      rol_Id,
      
    })
    
    const salt = await bcrypt.genSalt(8);
    newUsuario.password = await bcrypt.hash(password, salt);
    await newUsuario.save()

    
    .then(newUsuario=>{
      let token=jwt.sign({newUsuario:newUsuario},'secret',{
        expiresIn:'60'
      });
      res.json({
        newUsuario:newUsuario,
        token:token
      })
    })

    res.json(newUsuario)
    
  } catch (error) {
    return res.status(500).json(error );
  }
};

//actualizar usuario
export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { correo, password,activo,rol_Id} = req.body;
    // const credencial=await Credencial.findOne({
    //   where:{id},
    //});
    //credencial.set(req.body);
    //const { correo, password} = req.body;

    const usuario = await Usuario.findByPk(id);
    usuario.correo = correo;
    usuario.password = password;
    usuario.activo = activo;
    usuario.rol_Id = rol_Id;
    
    
    const salt = await bcrypt.genSalt(8);
    usuario.password = await bcrypt.hash(password, salt);
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//eliminar usuario
export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsuarioRepresentante=async(req,res)=>{
 try {
  const {id}=req.params
  const representante=await Representante.findAll({
    where:{usuarioId:id}
  })
  res.json(representante)
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
}
