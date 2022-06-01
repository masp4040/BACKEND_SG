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
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      
      
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue:true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);