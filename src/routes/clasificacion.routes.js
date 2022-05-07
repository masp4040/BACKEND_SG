import Router from "express";
import { createClasificacion, deleteClasificacion, getClasificacion, getClasificaciones, updateClasificacion } from "../controllers/clasificacion.controller.js";


const router = Router();


router.get('/clasificaciones',getClasificaciones);
router.post('/clasificaciones',createClasificacion);
router.put('/clasificaciones/:id',updateClasificacion)
router.delete('/clasificaciones/:id',deleteClasificacion);
router.get('/clasificaciones/:id',getClasificacion);


export default router;
