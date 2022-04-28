import Router from "express";
import { createRepresentante, deleteRepresentante, getRepre, getRepresentantes, updateRepresentante } from "../controllers/representante.controller.js";
const router = Router();


router.get('/representantes',getRepresentantes);
router.post('/representantes',createRepresentante)
router.put('/representantes/:id',updateRepresentante)
router.delete('/representantes/:id',deleteRepresentante)
router.get('/representantes/:id',getRepre)


export default router;
