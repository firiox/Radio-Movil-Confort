import { Router } from "express";
import { mostrarPaginaEmpresa } from "../controllers/visitante.controller";

const router = Router()
router.get("/", mostrarPaginaEmpresa);


export default router
