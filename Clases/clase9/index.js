let express = require ("express");
const app = express();
let fs = require("fs")
const PORT = 3001;


app.engine('cte', async(filePath, options, cb)=> {
    try {
        let content = await fs.promises.readFile(filePath);
        const rendered = content.toString()
                                            .replace(`^^titulo$$`, options.titulo)
                                            .replace(`^^mensaje$$`, options.mensaje)
                                            .replace(`^^autor$$`, options.autor)
                                            .replace(`^^version$$`, options.version)
        return cb(null, rendered)
    } catch (error) {
        return cb(new Error(error))
    }
})

app.set("views", "./views/custom");
app.set("view engine", "cte");

app.get("/", (req, res) => {
    res.send("OK!")
})

app.get("/cte1", (req, res) => {
    let data = {
        titulo: "Interestelar",
        mensaje: "De mis pelis favoritas",
        autor: "Cristopher Nolan",
        version: "2014.1.4"
    }
   res.render("plantilla1", data) 
})

app.get("/cte2", (req, res) => {
    let data = {
        nombre: "Stefano",
        apellido: "Montanari",
        fecha: `${new Date().getUTCFullYear()}`,
        version: "2014.1.4"
    }
    res.render("plantilla2", data)
})

app.listen(PORT, ()=> {console.log(`Server on http://localhost:${PORT}`);})