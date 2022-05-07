import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Subestandar } from "./Subestandar.js";



export const EstandarMinimo = sequelize.define("estandares_minimos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    
    
    
  },
  
},
{
  timestamps: false,
});

EstandarMinimo.hasOne(Subestandar,{
  foreignKey:'estandar_minimo_Id',
  sourceKey:'id'
})                                                                  

Subestandar.belongsTo(EstandarMinimo,{
  foreignKey:'estandar_minimo_Id',
  targetId:'id'
})


