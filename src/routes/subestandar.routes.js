import Router from "express";

import { createSubestandar,deleteSubestandar, getSubestandar, getSubestandares, updateSubestandar } from "../controllers/subestandar.controller.js";


const router = Router();


router.get('/subestandares',getSubestandares);
router.post('/subestandares',createSubestandar)
router.put('/subestandares/:id',updateSubestandar)
router.delete('/subestandares/:id',deleteSubestandar)
router.get('/subestandares/:id',getSubestandar)


export default router;
