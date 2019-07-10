module.exports = (app, db) => {
    app.get("/api/authors", (req, res) => {
        db.author.findAll().then((authors) => {
            res.send(authors)
        })
    })
    app.get("/api/authors/:id", (req, res) =>
        db.author.findByPk(req.params.id).then((result) => res.json(result))
    );
}
