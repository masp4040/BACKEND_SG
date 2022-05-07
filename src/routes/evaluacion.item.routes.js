import Router from "express";
import { createEvaluacionesItems, deleteEvaluacionesItems, getEvaluacionesItem, getEvaluacionesItems, updateEvaluacionesItems } from "../controllers/evaluaciones.item.controller.js";

const router = Router();


router.get('/evaluacionesItems',getEvaluacionesItems);
router.post('/evaluacionesItems',createEvaluacionesItems)
router.put('/evaluacionesItems/:id',updateEvaluacionesItems)
router.delete('/evaluacionesItems/:id',deleteEvaluacionesItems)
router.get('/evaluacionesItems/:id',getEvaluacionesItem)


export default router;
