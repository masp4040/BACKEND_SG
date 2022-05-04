import express from "express";


import credencialRoutes from "./routes/credencial.routes.js";
import representanteRoutes from "./routes/representante.routes.js";
import empresaRoutes from "./routes/empresa.routes.js";
import rolRoutes from "./routes/rol.routes.js";
import tipoRoutes from "./routes/tipo.responsable.routes.js";
import cicloRoutes from './routes/ciclo.routes.js';
import responsableRoutes from './routes/representante.routes.js'
import tipoRes from './routes/tipo.responsable.routes.js'
import tipoEva from './routes/tipo.evaluacion.routes.js'

const app = express();

//middlewares

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
export default app;
