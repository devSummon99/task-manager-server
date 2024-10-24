import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors( {
    origin: []
}))

app.get("/api-tasks/v1/", (req,res) => {
res.send("<h1>Hello Tasks</h1>")
});



export default app;