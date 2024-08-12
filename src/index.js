import express from "express";
import postController from "./controller/postController.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/posts", postController);

app.get("/", (req, res) => {
    return res.send("welcome api blog");
});

app.listen(3001, () => console.log("run port 3001"));
