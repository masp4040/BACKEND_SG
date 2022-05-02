import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Responsable = sequelize.define("responsables", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: DataTypes.STRING
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
