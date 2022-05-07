import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Evaluacion } from "./Evaluacion.js";


export const TipoValoracion = sequelize.define("tipo_valoraciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.STRING
    
  },
  min: {
    type: DataTypes.INTEGER

  },
  max: {
    type: DataTypes.INTEGER
  }
  
},
{
  timestamps: false,

});

TipoValoracion.hasOne(Evaluacion, {
  foreignKey: "tipo_valoracion_Id",
  sourceKey: "id",
});

Evaluacion.belongsTo(TipoValoracion, {
  foreignKey: "tipo_valoracion_Id",
  targetId: "id",
});



