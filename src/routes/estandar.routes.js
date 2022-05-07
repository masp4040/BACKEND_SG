import Router from "express";
import { createEstandar, deleteEstandar, getEstandar, getEstandares, updateEstandar } from "../controllers/estandar.minimo.controller.js";

const router = Router();


router.get('/estandares',getEstandares);
router.post('/estandares',createEstandar)
router.put('/estandares/:id',updateEstandar)
router.delete('/estandares/:id',deleteEstandar)
router.get('/estandares/:id',getEstandar)


export default router;
