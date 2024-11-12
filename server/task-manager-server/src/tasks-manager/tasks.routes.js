export { Router } from "express";
import { getTasks, getTaskByID, createTask, updateTaskByID, deleteTaskByID } from "./tasks.controller.js"

const router = Router();


router.get("/tasks", getTasks);

router.get("/tasks/:id", getTaskByID);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTaskByID);

router.delete("/tasks/:id", deleteTaskByID)


export default router;