import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EvaluacionesItems } from "./EvaluacionesItems.js";


export const ItemEstandar = sequelize.define("item_estandar", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numeral: {
    type: DataTypes.STRING
    
    
  },
  marco_legal: {
    type: DataTypes.TEXT

  },
  criterio_aceptacion: {
    type: DataTypes.TEXT
  },
  modo_verificacion: {
    type: DataTypes.TEXT
  },
  valor: {
    type: DataTypes.DECIMAL,
},
descripcion:{
    type:DataTypes.TEXT
}
},
{
  timestamps: false,

});

ItemEstandar.hasOne(EvaluacionesItems,{
  foreignKey:'item_Id',
  sourceKey:'id'
})                                                                  

EvaluacionesItems.belongsTo(ItemEstandar,{
  foreignKey:'item_Id',
  targetId:'id'
})



