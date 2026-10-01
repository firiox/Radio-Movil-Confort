import { Request, Response } from "express";
import { pool } from "../config/db";

export function mostrarPaginaEmpresa(req: Request, res: Response){

    res.render("sistema-radio-taxi/visitante", {
        titulo: "Radio Taxi Confort",
    })
}