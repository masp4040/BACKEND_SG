import Router from "express";
import { createItemEstandar, deleteItemEstandar, getItemEstandar, getItems, updateItemEstandar } from "../controllers/item.estandar.controller.js";


const router = Router();


router.get('/estandares',getItems);
router.post('/estandares',createItemEstandar)
router.put('/estandares/:id',updateItemEstandar)
router.delete('/estandares/:id',deleteItemEstandar)
router.get('/estandares/:id',getItemEstandar)


export default router;
