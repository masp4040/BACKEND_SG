import Router from "express";
import { createTipoResponsable, deleteTipoResponsable, getTipoResponsable, getTipoResponsables, updateTipoResponsable } from "../controllers/tipos.responsable.controller.js";

const router = Router();


router.get('/tipo_responsables',getTipoResponsables);
router.post('/tipo_responsables',createTipoResponsable)
router.put('/tipo_responsables/:id',updateTipoResponsable)
router.delete('/tipo_responsables/:id',deleteTipoResponsable)
router.get('/tipo_responsables/:id',getTipoResponsable)


export default router;
