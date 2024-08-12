import supabase from "../lib/supabase.js";
import route from "../lib/route.js";

const postController = route;

postController.get("/", async (req, res) => {
    const { data, error, status, statusText } = await supabase
        .from("blog")
        .select("*");

    if (error) console.error(error);
    return res.send({
        status,
        statusText,
        data,
    });
});

postController.get("/:id", async (req, res) => {
    const { data, error, status } = await supabase
        .from("blog")
        .select("*")
        .eq("id", parseInt(req.params.id));

    if (error) console.error(error);
    return res.send({
        status,
        data,
    });
});

postController.post("/", async (req, res) => {
    const { title, body } = req.body;

    const { error, status } = await supabase
        .from("blog")
        .insert({ title, body });

    if (error) console.error(error);
    return res.send({
        status,
        msg: "created",
    });
});

postController.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;

    const { error, status } = await supabase
        .from("blog")
        .update({ title, body })
        .eq("id", parseInt(id));

    if (error) console.error(error);
    return res.send({
        status,
        msg: "updated",
    });
});

postController.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const { error, status } = await supabase
        .from("blog")
        .delete()
        .eq("id", parseInt(id));

    if (error) console.error(error);
    return res.send({
        status,
        msg: "deleted",
    });
});

export default postController;
