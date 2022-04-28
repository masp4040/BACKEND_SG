import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Representante } from "./Representante.js";

export const Credencial = sequelize.define("credenciales", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  correo: {
    type: DataTypes.STRING,
    
  },
  password: {
    type: DataTypes.STRING,
  },
},
{
  timestamps: false,
});

Credencial.hasOne(Representante,{
  foreignKey:'credencialId',
  sourceKey:'id'
})                                                                  

Representante.belongsTo(Credencial,{
  foreignKey:'credencialId',
  targetId:'id'
})


