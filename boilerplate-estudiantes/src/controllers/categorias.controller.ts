import { Request, Response } from "express";
import { pool } from "../config/db";


export async function listarCategorias(req: Request, res: Response) {
    const [categorias] = await pool.query("SELECT * FROM categorias")
    res.render("categorias/index", {
        titulo: "Lista de categorias, BD2",
        categorias
    })
}

export function mostrarCrearCategoria(req: Request, res: Response){

    res.render("categorias/nueva", {
        titulo: "Crear categoria",
    })
}

export async function crearCategoria(req: Request, res: Response) {
    const values = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
    console.log(values)
    await pool.execute("INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)",[values.nombre, values.descripcion])
    res.redirect("/categorias");
}