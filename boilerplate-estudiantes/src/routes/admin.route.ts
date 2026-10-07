import { Router } from "express";
import { crearConductor, listarConductores, mostrarCrearConductor, mostrarModulodeAdmin } from "../controllers/admin.controller";

const router = Router()
router.get("/", mostrarModulodeAdmin);

//DEPRECATED
/*

router.get("/", listarConductores);
router.get("/crear-conductor", mostrarCrearConductor);
router.post("/", crearConductor);
*/
export default router