import Router from "express";
const router = Router();
import { createUsuario, deleteUsuario,  getUsuarios, updateUsuario,getUsuarioRepresentante, signIn } from "../controllers/usuario.controller.js";
import {auth} from "../middlewares/auth.js";


router.get("/usuarios", auth, getUsuarios);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:correo", deleteUsuario);
router.post("/api/usuarios", signIn);

router.get("/usuarios/:correo/representante", getUsuarioRepresentante);


export default router;
