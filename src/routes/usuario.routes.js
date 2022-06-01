import Router from "express";
const router = Router();
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario,getUsuarioRepresentante } from "../controllers/usuario.controller.js";

router.get("/usuarios", getUsuarios);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.get("/usuarios/:correo", getUsuario);

router.get("/usuarios/:correo/representante", getUsuarioRepresentante);

export default router;
