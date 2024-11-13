import { connect } from "../db/config"

export const getTasks = async (req, res) => {
    const { rows } = await connect.query("SELECT * FROM tasks");
    return rows.length > 0
        ? res.status(200).json(rows)
        : res.status(404).json({ message: "No existe ninguna tarea" });
}

export const getTaskByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rows } = await connect.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
    return rows
        ? res.status(200).json(rows)
        : res.status(404).json({ message: "La tarea buscada no existe" });
}

export const createTask = async (req, res) => {
    const { title, description, state } = req.body;
    const { rows } = await connect.query(`SELECT * FROM tasks WHERE title = $1`, [title]);
    return rows.length > 0
        ? res.status(400).json({ message: "La tarea ya existe" })
        : (await connect.query(
            'INSERT INTO tasks (title, state,description) VALUES ($1, $2, $3) RETURNING *',
            [title, state, description]
        )) && res.status(201).json(req.body);
}

export const updateTaskByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, state } = req.body;
    const { rows } = await connect.query(`SELECT FROM tasks WHERE id = $1`, [id]);
    return rows.length > 0
        ? (await connect.query(`UPDATE tasks SET title = $1, state = $2, description = $3 WHERE id = $4`, [title, state, description, id])) && res.status(200).json({ message: "La tarea se ha modificado con éxito" })
        : res.status(404).json({ message: "La tarea buscada no existe" });
}

export const deleteTaskByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rows } = await connect.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
    return rows
        ? (await connect.query(`DELETE FROM tasks WHERE id = $1`, [id])
        ) && res.status(201).json({ message: "La tarea se ha eliminado correctamente" })
        : res.status(404).json({ message: "La tarea buscada no existe" });
}
