import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { EvaluacionesItems } from "./EvaluacionesItems.js";

export const Evaluacion = sequelize.define("evaluaciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  puntaje: {
    type: DataTypes.DECIMAL
    
    
  },
  descripcion: {
    type: DataTypes.TEXT

  },
  fecha: {
    type: DataTypes.DATE
  },
  cant_estandares_cumplidos: {
    type: DataTypes.INTEGER
  },
  cant_estandares_NC: {
    type: DataTypes.INTEGER,
},
},
{
  timestamps: false,

});

Evaluacion.hasOne(EvaluacionesItems,{
  foreignKey:'evaluacion_Id',
  sourceKey:'id'
})                                                                  

EvaluacionesItems.belongsTo(Evaluacion,{
  foreignKey:'evaluacion_Id',
  targetId:'id'
})
