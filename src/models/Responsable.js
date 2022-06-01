import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Responsable = sequelize.define("responsables", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: DataTypes.STRING,
    validate:{
      isAlpha:{
        msg:'los nombres solo pueden contener letras'
        },
        len:{
          args:[4,255],
          msg:'los nombre debe contener minimo 4 caracteres'
        }
      }
    },
  
  apellidos: {
    type: DataTypes.STRING
  },
  cedula: {
    type: DataTypes.STRING
  },
},
{
  timestamps: false,
});
