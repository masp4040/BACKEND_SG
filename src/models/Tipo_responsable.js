import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clasificacion } from "./Clasificacion.js";
import { Responsable } from "./Responsable.js";


export const Tipo_responsable = sequelize.define("tipos_responsable", {
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

Tipo_responsable.hasOne(Responsable, {
  foreignKey: "tipo_responsableId",
  sourceKey: "id",
});

Responsable.belongsTo(Tipo_responsable, {
  foreignKey: "tipo_responsableId",
  targetId: "id",
});

Tipo_responsable.hasOne(Clasificacion, {
  foreignKey: "tipo_responsableId",
  sourceKey: "id",
});

Clasificacion.belongsTo(Tipo_responsable, {
  foreignKey: "tipo_responsableId",
  targetId: "id",
});


