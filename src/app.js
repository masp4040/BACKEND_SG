import express from "express";
import cors from "cors";


import credencialRoutes from "./routes/credencial.routes.js";
import representanteRoutes from "./routes/representante.routes.js";
import empresaRoutes from "./routes/empresa.routes.js";
import rolRoutes from "./routes/rol.routes.js";
import tipoRoutes from "./routes/tipo.responsable.routes.js";
import cicloRoutes from './routes/ciclo.routes.js';
import responsableRoutes from './routes/representante.routes.js'
import tipoRes from './routes/tipo.responsable.routes.js'
import tipoEva from './routes/tipo.evaluacion.routes.js'
import estandar from './routes/estandar.routes.js'
import clasificacion from './routes/clasificacion.routes.js'
import evaluacion from './routes/evaluacion.routes.js'
import valoracion from './routes/tipo.valoracion.routes.js'
import subestandar from './routes/subestandar.routes.js'
import itemEstandar from './routes/item.estandar.routes.js'
import evaluacion_item from './routes/evaluacion.item.routes.js'


const app = express();

//middlewares
app.use(cors())
app.use(express.json());



app.use(credencialRoutes);
app.use(representanteRoutes);
app.use(empresaRoutes);
app.use(rolRoutes);
app.use(tipoRoutes);
app.use(cicloRoutes);
app.use(responsableRoutes)
app.use(tipoRes)
app.use(tipoEva)
app.use(estandar)
app.use(clasificacion)
app.use(evaluacion)
app.use(valoracion)
app.use(subestandar)
app.use(itemEstandar)
app.use(evaluacion_item)
export default app;
