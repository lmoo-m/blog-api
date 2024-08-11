import express from "express";
import postController from "../src/controller/postController.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/posts", postController);

app.listen(3001, () => console.log("run port 3001"));
