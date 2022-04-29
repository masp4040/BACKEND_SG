import Router from "express";
import { createEmpresa, deleteEmpresa, getEmpresa, getEmpresas, updateEmpresa } from "../controllers/empresa.controller.js";

const router = Router();


router.get('/empresas',getEmpresas);
router.post('/empresas',createEmpresa)
router.put('/empresas/:id',updateEmpresa)
router.delete('/empresas/:id',deleteEmpresa)
router.get('/empresas/:id',getEmpresa)


export default router;
