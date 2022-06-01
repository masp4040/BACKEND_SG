import 'dotenv/config'
import Sequelize from "sequelize";



//configuracion de la base de datos
export const sequelize = new Sequelize(
  process.env.DB_DATABASE, 
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
    {
  host: "localhost",
  dialect: "mysql",
});
