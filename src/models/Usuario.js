import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail:{
          msg:'El email debe ser un correo valido'
        },
        notEmpty:{
          msg:'Ingrese un email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg:'Ingrese un password'
        }
      }
      
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue:true,
      allowNull: false,
    },
    rol_Id:{
      type:DataTypes.STRING,
      defaultValue:3,
      allowNull:false
    }
  },
  {
    timestamps: true,
  }
);