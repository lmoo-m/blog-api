const express = require("express");
const postController = require("./controller/postController.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/posts", postController);

app.get("/", (req, res) => {
    return res.send("welcome api blog");
});

app.listen(3001, () => console.log("run port 3001"));
