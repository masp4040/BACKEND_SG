import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuario } from "./Usuario.js";


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

Rol.hasOne(Usuario,{
  foreignKey:'rol_Id',
  sourceKey:'id'
})                                                                  

Usuario.belongsTo(Rol,{
  foreignKey:'rol_Id',
  targetId:'id'
})


