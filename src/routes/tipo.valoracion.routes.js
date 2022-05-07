import Router from "express";
import { createTipoValoracion, deleteTipoValoracion, getTipoValoracion, getTipoValoraciones, updateTipoValoracion } from "../controllers/tipos.valoracion.controller.js";

const router = Router();


router.get('/tipo_valoraciones',getTipoValoraciones);
router.post('/tipo_valoraciones',createTipoValoracion)
router.put('/tipo_valoraciones/:id',updateTipoValoracion)
router.delete('/tipo_valoraciones/:id',deleteTipoValoracion)
router.get('/tipo_valoraciones/:id',getTipoValoracion)


export default router;
