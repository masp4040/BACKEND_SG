import Router from "express";
import { createRol, deleteRol, getRol, getRoles, updateRol } from "../controllers/rol.controller.js";

const router = Router();


router.get('/roles',getRoles);
router.post('/roles',createRol)
router.put('/roles/:id',updateRol)
router.delete('/roles/:id',deleteRol)
router.get('/roles/:id',getRol)


export default router;
