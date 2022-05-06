import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clasificacion } from "./Clasificacion.js";


export const TipoEvaluacion = sequelize.define("tipo_evaluacion", {
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

TipoEvaluacion.hasOne(Clasificacion,{
  foreignKey:'tipo_evaluacion_Id',
  sourceKey:'id'
})                                                                  

Clasificacion.belongsTo(TipoEvaluacion,{
  foreignKey:'tipo_evaluacion_Id',
  targetId:'id'
})


