import prisma from "../lib/prisma.js";
import route from "../lib/route.js";

const postController = route;

postController.get("/", async (req, res) => {
    const postsData = await prisma.post.findMany();

    return res.send({
        data: postsData,
    });
});

postController.get("/:id", async (req, res) => {
    const postsData = await prisma.post.findFirst({
        where: { id: parseInt(req.params.id) },
    });

    return res.send({
        data: postsData,
    });
});

postController.post("/", async (req, res) => {
    const { title, content } = req.body;

    const postsData = await prisma.post.create({
        data: { title, content },
    });

    return res.send({
        data: postsData,
    });
});

postController.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const postsData = await prisma.post.update({
        where: {
            id: parseInt(id),
        },
        data: { title, content },
    });

    return res.send({
        data: postsData,
    });
});

postController.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const postsData = await prisma.post.delete({
        where: {
            id: parseInt(id),
        },
    });

    return res.send({
        data: postsData,
    });
});

export default postController;
