import { Router } from "express";
import { iniciarMonitoreo } from "../controllers/operador.controller";

const router = Router()

router.get("/", iniciarMonitoreo);

export default router