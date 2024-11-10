import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRoutes from "./users/users.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors( {
    origin: []
}))

app.get("/api-tasks/v1/", (req,res) => {
res.send("<h1>Hello Tasks</h1>")
});

app.use("/api-books/v1/", usersRoutes);



export default app;