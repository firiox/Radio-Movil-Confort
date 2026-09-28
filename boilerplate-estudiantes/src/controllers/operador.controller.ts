import { Request, Response } from "express";
import { pool } from "../config/db";

export async function iniciarMonitoreo(req: Request, res: Response) {
    res.render("sistema-radio-taxi/monitoreo", {
        titulo: "Monitoreo Conductores",
    })
}