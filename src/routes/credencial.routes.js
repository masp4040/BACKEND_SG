import Router from "express";
const router = Router();
import {
  createCredencial,
  deleteCredencial,
  getCredencial,
  getCredenciales,
  getCredencialRepresentante,
  updateCredencial,
} from "../controllers/credencial.controller.js";

router.get("/credenciales", getCredenciales);
router.post("/credenciales", createCredencial);
router.put("/credenciales/:id", updateCredencial);
router.delete("/credenciales/:id", deleteCredencial);
router.get("/credenciales/:id", getCredencial);

router.get("/credenciales/:id/representante", getCredencialRepresentante);

export default router;
