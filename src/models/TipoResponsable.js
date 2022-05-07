import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clasificacion } from "./Clasificacion.js";
import { Responsable } from "./Responsable.js";


export const TipoResponsable = sequelize.define("tipos_responsable", {
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

TipoResponsable.hasOne(Responsable, {
  foreignKey: "tipo_responsable_Id",
  sourceKey: "id",
});

Responsable.belongsTo(TipoResponsable, {
  foreignKey: "tipo_responsable_Id",
  targetId: "id",
});

TipoResponsable.hasOne(Clasificacion, {
  foreignKey: "tipo_responsable_Id",
  sourceKey: "id",
});

Clasificacion.belongsTo(TipoResponsable, {
  foreignKey: "tipo_responsable_Id",
  targetId: "id",
});


