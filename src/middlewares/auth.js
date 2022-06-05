import jwt from "jsonwebtoken"
import { secret } from "../database/auth.js";
import { Usuario } from "../models/Usuario.js";


export const auth =(req,res,next)=>{
    
    console.log(req.headers);

    //comprobar si existe el token
    if(!req.headers.authorization){
        res.status(401).json({msg:"Acceso no autorizado "});
    }else{

        //comprobar la validez de este token

        const token=req.headers.authorization.split(" ")[1];

        //comprobar la validez de este token

        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                res.status(500).json({msg:"ha ocurrido un problema al decodificar el token", err});
            }else{

                Usuario.findByPk(decoded.usuario.id,{include:"roles"}).then(usuario=>{
                    req.usuario=usuario;
                })
                //req.usuario=decoded.usuario;
                next();
            }
        })

        

    };

    
}