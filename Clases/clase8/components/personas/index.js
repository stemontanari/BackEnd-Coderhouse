let {Router} = require("express");
let router = new Router();
let multer = require("multer");
let path = require("path");

let storage = multer.diskStorage({
    destination: path.join (__dirname, "../uploads"),
    filename: (req, file, cb)=>{
        console.log(file);
        cb(null, `${file.originalname}`)
    }
});

let midMulter = multer({
    storage,
    dest: path.join (__dirname, "../uploads"),
    limits:{fileSize: 100000}
})

let addInfo = (req, res, next)=> {
    req.body.nacionalidad = "Brasil";
    next();
}


module.exports = app => {

    let _arr = [
        {
            nombre: "Stefano Montanari",
            edad: 21
        },
        {
            nombre: "Emiliano Montanari",
            edad: 28
        }
    ]

    app.use("/personas", router);
    router.use(midMulter.single("file"));

    router.use((req, res, next)=> {
        req.body.router = true;
        next();
    });

    router.get("/", (req, res, next) => {
        res.send("Hola estoy en personas");
        res.json({personas: _arr})
    });

    router.post("/", addInfo, (req, res, next) => {
        let obj = req.body;
        _arr.push(obj);
        res.json({personas: _arr})
    });

    router.post("/archivos", (req, res, next) => {
        console.log("------------------");
        console.log(req.file);
        res.json({hola: "hola"})
    });
}