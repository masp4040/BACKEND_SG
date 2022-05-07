import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Evaluacion } from "./Evaluacion.js";


export const Clasificacion = sequelize.define(
  "clasificaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    num_empleados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    nivel_riesgo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    num_estandares:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  },
  {
    timestamps: false,
  }
);

Clasificacion.hasOne(Evaluacion, {
  foreignKey: "clasificacion_Id",
  sourceKey: "id",
});

Evaluacion.belongsTo(Clasificacion, {
  foreignKey: "clasificacion_Id",
  targetId: "id",
});
