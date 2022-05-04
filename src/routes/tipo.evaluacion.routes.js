import Router from "express";
import { createTipoEvaluacion, deleteTipoEvaluacion, getTipoEvaluacion, getTipoEvaluaciones, updateTipoEvaluacion } from "../controllers/tipos.evaluacion.controller.js";


const router = Router();


router.get('/tipo_evaluaciones',getTipoEvaluaciones);
router.post('/tipo_evaluaciones',createTipoEvaluacion)
router.put('/tipo_evaluaciones/:id',updateTipoEvaluacion)
router.delete('/tipo_evaluaciones/:id',deleteTipoEvaluacion)
router.get('/tipo_evaluaciones/:id',getTipoEvaluacion)


export default router;
