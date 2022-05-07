import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ItemEstandar } from "./ItemEstandar.js";




export const Subestandar = sequelize.define("subestandares", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.INTEGER,
   
  },
  
},
{
  timestamps: false,
});

Subestandar.hasOne(ItemEstandar,{
  foreignKey:'subestandar_Id',
  sourceKey:'id'
})                                                                  

ItemEstandar.belongsTo(Subestandar,{
  foreignKey:'subestandar_Id',
  targetId:'id'
})


