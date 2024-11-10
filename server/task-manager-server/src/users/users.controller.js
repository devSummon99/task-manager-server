import { connect } from "../db/config.js";
import bcrypt from "bcryptjs";

const { hashSync, compareSync } = bcrypt;

export const getUsers = async (req, res) => {
    const { rows } = await connect.query("SELECT * FROM users");
    return rows.length > 0
        ? res.status(200).json(rows)
        : res.status(404).json({ message: "No existe ningun usuario" }) && console.log("ERROR en obtener todos los usuarios");
}

export const getUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rows } = await connect.query(`SELECT * FROM users WHERE id = ${id}`);
    return rows
        ? res.status(200).json(rows)
        : res.status(404).json({ message: "El usuario buscado no existe" }) && console.log("ERROR en obtener todos un usuario");
}

export const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    const { rows } = await connect.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return rows.length > 0
        ? res.status(400).json({ message: "El usuario ya existe" } && console.log("ERROR en crear un usuario"))
        : (await connect.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
            [username, hashSync(password, 10), email]
        )) && res.status(201).json(req.body);
};

export const updateUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password, email } = req.body;
    const { rows } = await connect.query(`SELECT FROM users WHERE id = $1`, [id]);
    return rows.length > 0
        ? (await connect.query(`UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4`, [username, email, hashSync(password, 10),id])) && res.status(200).json({ message: "El usuario se ha modificado con éxito" })
        : res.status(404).json({ message: "El usuario buscado no existe" });
}

export const deleteUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rows } = await connect.query(`SELECT * FROM users WHERE id = ${id}`);
    return rows
        ? (await connect.query(`DELETE FROM users WHERE id = $1`,[id])
        ) && res.status(201).json({ message: "El usuario se ha eliminado correctamente" })
        : res.status(404).json({ message: "El usuario buscado no existe" });
};
