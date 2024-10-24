import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors( {
    origin: []
}))

app.use("/api-tasks/v1/", tasksRoutes);



export default app;