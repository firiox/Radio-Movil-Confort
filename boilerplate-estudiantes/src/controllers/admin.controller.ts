import { Request, Response } from "express";
import { pool } from "../config/db";

export async function listarConductores(req: Request, res: Response) {
    const [conductores] = await pool.query("SELECT * FROM conductor")
    res.render("sistema-radio-taxi/conductores", {
        titulo: "Lista de conductores - Radio Taxi Coral",
        conductores
    })
}

export function mostrarCrearConductor(req: Request, res: Response){

    res.render("sistema-radio-taxi/crear-conductor", {
        titulo: "Crear conductor",
    })
}

export async function crearConductor(req: Request, res: Response) {
    const values = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        estado: req.body.estado
    }
    console.log(values)
    await pool.execute("INSERT INTO conductor(nombre, apellido, telefono, estado) VALUES (?, ?, ?, ?)", [values.nombre, values.apellido, values.telefono, values.estado])
    res.redirect("/sistema-radio-taxi");
}
