import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { Representante } from "./Representante.js";

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

// Clasificacion.hasOne(Representante, {
//   foreignKey: "credencialId",
//   sourceKey: "id",
// });

// Representante.belongsTo(Clasificacion, {
//   foreignKey: "credencialId",
//   targetId: "id",
// });
