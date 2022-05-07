import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EstandarMinimo } from "./EstandarMinimo.js";



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

Ciclo.hasOne(EstandarMinimo,{
  foreignKey:'ciclo_Id',
  sourceKey:'id'
})                                                                  

EstandarMinimo.belongsTo(Ciclo,{
  foreignKey:'ciclo_Id',
  targetId:'id'
})


