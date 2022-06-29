import Router from "express";
import { createEmpresa, deleteEmpresa, getEmpresa, getEmpresas, updateEmpresa } from "../controllers/empresa.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();


router.get('/empresas',auth,  getEmpresas);
router.post('/empresas' , auth,createEmpresa)
router.put('/empresas/:id',updateEmpresa)
router.delete('/empresas/:id',deleteEmpresa)
router.get('/empresas/:id',getEmpresa)


export default router;
