import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
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
  foreignKey: "empresaId",
  sourceKey: "id",
});

Representante.belongsTo(Empresa, {
  foreignKey: "empresaId",
  targetId: "id",
});

Empresa.hasOne(Responsable, {
  foreignKey: "empresaId",
  sourceKey: "id",
});

Responsable.belongsTo(Empresa, {
  foreignKey: "empresaId",
  targetId: "id",
});
