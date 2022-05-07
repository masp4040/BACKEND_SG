import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { EstandarMinimo } from "./EstandarMinimo.js";



export const EvaluacionesItems = sequelize.define("evaluaciones_item", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cumple: {
    type: DataTypes.TINYINT,
   
  },
  
},
{
  timestamps: false,
});

// Ciclo.hasOne(EstandarMinimo,{
//   foreignKey:'ciclo_Id',
//   sourceKey:'id'
// })                                                                  

// EstandarMinimo.belongsTo(Ciclo,{
//   foreignKey:'ciclo_Id',
//   targetId:'id'
// })


