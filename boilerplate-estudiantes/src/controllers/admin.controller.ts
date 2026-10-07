import { Request, Response } from "express";
import { pool } from "../config/db";

export function mostrarModulodeAdmin(req: Request, res: Response) {
    res.render("sistema-radio-taxi/admin", {
        titulo: "Modulo de Administración - Radio Taxi Confort",
    })
}

export async function listarConductores(req: Request, res: Response) {
    const [conductores] = await pool.query("SELECT * FROM conductor")
    res.render("sistema-radio-taxi/conductores", {
        titulo: "Lista de conductores - Radio Taxi Confort",
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

// OPERADORES

export async function listarOperadores(req: Request, res: Response) {
    const [operadores] = await pool.query("SELECT * FROM operador")
    res.render("sistema-radio-taxi/admin/operadores", {
        titulo: "Lista de operadores - Radio Taxi Confort",
        operadores
    })

}

export function mostrarCrearOperador(req: Request, res: Response){

}

export async function crearOperador(req: Request, res: Response) {

}


// VISITANTE

export function mostrarPaginaEmpresa(req: Request, res: Response){

    res.render("sistema-radio-taxi/visitante", {
        titulo: "Radio Taxi Confort",
    })
}
