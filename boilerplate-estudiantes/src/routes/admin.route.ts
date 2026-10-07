import { Router } from "express";
import { crearConductor, listarConductores, mostrarCrearConductor, mostrarModulodeAdmin, mostrarPaginaEmpresa } from "../controllers/admin.controller";

const router = Router()
router.get("/", mostrarModulodeAdmin);
router.get("/", listarConductores);
router.get("/", mostrarPaginaEmpresa);

//DEPRECATED

router.get("/conductores", listarConductores);

/*
router.get("/crear-conductor", mostrarCrearConductor);
router.post("/", crearConductor);
*/
export default router