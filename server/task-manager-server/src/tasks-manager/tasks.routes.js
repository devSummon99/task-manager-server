export { Router } from "express";
import { getTasks, getTaskByID, createTask, updateTaskByID, deleteTaskByID } from "./tasks.controller.js"

const router = Router();

export default router;