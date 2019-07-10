module.exports = (app, db) => {
    app.get("/api/posts", (req, res) =>
        db.post.findAll().then((result) => res.json(result))
    );

    app.get("/api/posts/:id", (req, res) =>
        db.post.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post("/api/posts", (req, res) =>
        db.post.create({
            title: req.body.title,
            content: req.body.content
        }).then((result) => res.json(result))
    );

    app.put("/api/posts/:id", (req, res) =>
        db.post.update({
            title: req.body.title,
            content: req.body.content
        },
            {
                where: {
                    id: req.params.id
                }
            }).then((result) => res.json(result))
    );

    app.delete("/api/posts/:id", (req, res) =>
        db.post.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    );
}