import { Router } from "express";
import { crearConductor, listarConductores, mostrarCrearConductor, mostrarModulodeAdmin, listarOperadores, mostrarPaginaEmpresa } from "../controllers/admin.controller";

const router = Router()
router.get("/admin", mostrarModulodeAdmin);
router.get("/sistema-radio-taxi/admin/conductores", listarConductores);
router.get("/operadores", listarOperadores);
router.get("/", mostrarPaginaEmpresa);

//DEPRECATED



/*
router.get("/crear-conductor", mostrarCrearConductor);
router.post("/", crearConductor);
*/
export default router