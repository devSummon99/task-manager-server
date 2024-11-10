import { connect } from "../db/config";
import bcrypt from "bcryptjs";

const [hashSync, compareSync] = bcrypt;

export const getUsers = async (req, res) => {
    const users = await connect.query("SELECT * FROM users");
    return users.length > 0
        ? res.status(200).json(users)
        : res.status(404).json({ message: "No existe ningun usuario" });
}

export const getUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const userFound = await connect.query(`SELECT * FROM users WHERE id = ${id}`);
    return userFound
        ? res.status(200).json(userFound)
        : res.status(404).json({ message: "El usuario buscado no existe" });
}

export const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    const userNew = await connect.query(`SELECT * FROM users WHERE email = ${email}`);
    return userNew
      ? res.status(400).json({ message: "El usuario ya existe" })
      : (await await connect.query(`INSERT INTO users (username, email, password) VALUES ${username},${email}, ${hashSync(password)}`)) && res.status(201).json(req.body);
  };

export const deleteUserByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const userFound = await connect.query(`SELECT * FROM users WHERE id = ${id}`);
    return userFound
        ? (await connect.query(`DELETE FROM users WHERE id = ${id}`)
        ) && res.status(201).json({ message: "El usuario se ha eliminado correctamente" })
        : res.status(404).json({ message: "El usuario buscado no existe" });
};
