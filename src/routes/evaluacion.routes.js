import Router from "express";
import { createEvaluacion, deleteEvaluacion, getEvaluacion, getEvaluaciones, updateEvaluacion } from "../controllers/evaluacion.controller.js";

const router = Router();


router.get('/evaluaciones',getEvaluaciones);
router.post('/evaluaciones',createEvaluacion)
router.put('/evaluaciones/:id',updateEvaluacion)
router.delete('/evaluaciones/:id',deleteEvaluacion)
router.get('/evaluaciones/:id',getEvaluacion)


export default router;
