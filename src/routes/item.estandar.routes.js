import Router from "express";
import { createItemEstandar, deleteItemEstandar, getItemEstandar, getItems, updateItemEstandar } from "../controllers/item.estandar.controller.js";


const router = Router();


router.get('/Items',getItems);
router.post('/Items',createItemEstandar)
router.put('/Items/:id',updateItemEstandar)
router.delete('/Items/:id',deleteItemEstandar)
router.get('/Items/:id',getItemEstandar)


export default router;
