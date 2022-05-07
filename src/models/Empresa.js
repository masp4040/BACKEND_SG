import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clasificacion } from "./Clasificacion.js";
import { Representante } from "./Representante.js";
import { Responsable } from "./Responsable.js";

export const Empresa = sequelize.define("empresas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nit: {
    type: DataTypes.INTEGER
    
  },
  razon_social: {
    type: DataTypes.STRING

  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  codigo_CIUU: {
    type: DataTypes.INTEGER,
},
},
{
  timestamps: false,

});

Empresa.hasOne(Representante, {
  foreignKey: "empresa_Id",
  sourceKey: "id",
});

Representante.belongsTo(Empresa, {
  foreignKey: "empresa_Id",
  targetId: "id",
});

Empresa.hasOne(Responsable, {
  foreignKey: "empresa_Id",
  sourceKey: "id",
});

Responsable.belongsTo(Empresa, {
  foreignKey: "empresa_Id",
  targetId: "id",
});

Empresa.hasOne(Clasificacion, {
  foreignKey: "empresa_Id",
  sourceKey: "id",
});

Clasificacion.belongsTo(Empresa, {
  foreignKey: "empresa_Id",
  targetId: "id",
});
