import { Router } from "express";
import { crearConductor, listarConductores, mostrarCrearConductor } from "../controllers/admin.controller";

const router = Router()
router.get("/", listarConductores);
router.get("/crear-conductor", mostrarCrearConductor);
router.post("/", crearConductor);

export default router