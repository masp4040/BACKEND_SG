import Sequelize from "sequelize";

export const sequelize = new Sequelize("bdproyecto", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
