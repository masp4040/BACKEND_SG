import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const Ciclo = sequelize.define("ciclos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ciclo: {
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


