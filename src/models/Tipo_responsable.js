import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { Credencial } from "./Credencial.js";


export const Tipos = sequelize.define("tipos_responsable", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING,
    
    
    
  },
  
},
{
  timestamps: false,
});

// Rol.hasOne(Credencial,{
//   foreignKey:'rolId',
//   sourceKey:'id'
// })                                                                  

// Credencial.belongsTo(Rol,{
//   foreignKey:'rolId',
//   targetId:'id'
// })


