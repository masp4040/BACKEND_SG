import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Empresa = sequelize.define("empresas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nit: {
    type: DataTypes.INTEGER
    
  },
  razon_social: {
    type: DataTypes.STRING

  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  codigo_CIUU: {
    type: DataTypes.INTEGER,
},
},
{
  timestamps: false,

});
