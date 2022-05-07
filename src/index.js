import app from "./app.js";
import {sequelize}  from "./database/database.js";
import './models/Rol.js'
import './models/Credencial.js'
import './models/Empresa.js'
import './models/Representante.js'
import './models/TipoResponsable.js'
import './models/Ciclo.js'
import './models/Responsable.js'
import './models/TipoEvaluacion.js'
import './models/Clasificacion.js'
import './models/EstandarMinimo.js'
import './models/Evaluacion.js'
import './models/TipoValoracion.js'
import './models/Subestandar.js'
import './models/ItemEstandar.js'
import './models/EvaluacionesItems.js'


async function main() {
  try {
    await sequelize.sync({force:true});
    console.log("Connection has been established successfully.");
  
    
    app.listen(3000);
    console.log("Server is listening on port", 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
