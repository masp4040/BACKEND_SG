import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Credencial } from "./Credencial.js";


export const Rol = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol: {
    type: DataTypes.STRING,
    
  },
  
},
{
  timestamps: false,
});

Rol.hasOne(Credencial,{
  foreignKey:'rolId',
  sourceKey:'id'
})                                                                  

Credencial.belongsTo(Rol,{
  foreignKey:'rolId',
  targetId:'id'
})


