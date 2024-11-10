import { connect } from "../db/config";
import bcrypt from "bcryptjs";

const [ hashSync, compareSync ] = bcrypt;

export const getUsers = async (req, res) => {
    const users = await connect.query("SELECT * FROM users");
    res.json(users)
}

export const getUsersByID = async (req, res) => {
    const id = req.params;
    const user = await connect.query("SELECT * FROM users");
    res.json(users)
}
