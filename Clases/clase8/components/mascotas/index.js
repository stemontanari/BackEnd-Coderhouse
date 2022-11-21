let {Router} = require("express")
let router = new Router();

module.exports = app => {

    let _arr = [
        {
            nombre: "Mishi",
            edad: 7
        },
        {
            nombre: "Mia",
            edad: 12
        }
    ]

    app.use("/mascotas", router);
    router.get("/", (req, res, next) => {
        res.json({mascotas: _arr})
    })

    router.post("/", (req, res, next) => {
        let obj = req.body;
        _arr.push(obj);
        res.json({mascotas: _arr})
    })
}