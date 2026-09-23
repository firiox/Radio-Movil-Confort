import { Router } from "express";
import { crearCategoria, listarCategorias, mostrarCrearCategoria } from "../controllers/categorias.controller";

const router = Router()
router.get("/", listarCategorias);
router.get("/nueva", mostrarCrearCategoria);
router.post("/", crearCategoria)

export default router