import Router from "express";
import { createCiclo, deleteCiclo, getCiclo, getCiclos, updateCiclo } from "../controllers/ciclo.controller.js";


const router = Router();


router.get('/ciclos',getCiclos);
router.post('/ciclos',createCiclo);
router.put('/ciclos/:id',updateCiclo)
router.delete('/ciclos/:id',deleteCiclo);
router.get('/ciclos/:id',getCiclo);


export default router;
