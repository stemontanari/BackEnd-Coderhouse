let express = require ("express");
let moment = require ("moment")
const PORT = 3001; 
let app = express();

let visitas = 0;

// Lo lee en forma secuencial, asi que SI importa el orden
app.get("/", (req, res, next)=> {
    res.send(`<h1 style="color: blue"> Bienvenido Stefano! </h1>`);
})

app.get("/visitas", (req, res, next)=> {
    visitas++;
    res.send(`Totsl visitas ${visitas}`);
})

app.get("/fyh", (req, res, next)=> {
    let hora = moment().format("L")
    res.json({hora});
})


app.all("/", (req, res, next)=> {
    res.send(`Estoy en el metodo ALL DE EXPRES`)
})

app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`))