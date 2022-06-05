import app from "./app.js";
import {sequelize}  from "./database/database.js";
import './models/Rol.js'
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
import './models/Usuario.js'

async function main() {
  try {
    await sequelize.sync({force:false});
    console.log("Connection has been established successfully");

    const PORT= process.env.PORT || 4000
  
    app.get('/',(req,res)=>{
      res.send('BIENVENIDOS A MI SERVIDOR')
  })
    app.listen(PORT);
    console.log(`Server is listening on port , ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
