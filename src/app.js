import express from 'express';
import credencialRoutes from './routes/credencial.routes.js';
import representanteRoutes from './routes/representante.routes.js'

const app = express();

//middlewares

app.use(express.json());

app.use(credencialRoutes)
app.use(representanteRoutes)
export default app;
