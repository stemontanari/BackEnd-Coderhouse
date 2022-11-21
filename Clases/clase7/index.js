const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let frase= "El que tiene dolares, tiene dolares"

app.get("/frase", (req, res, next) => {
    res.json({frase})
})

app.get("/letras/:num", (req, res, next) => {
    let {num} = req.params;
    if(!isNaN(num)){
        let _frase = frase.split("");
        let response = Number(num) > _frase.length ? "Numero excede el limite" : _frase[Number(num) - 1];
        res.send(`${response}`)
    }else{
        res.send("Porfavor envia un numero")
    }
})

app.get("/palabras/:num", (req, res, next) => {
    let {num} = req.params;
    if(!isNaN(num)){
        let _palabras = frase.split(" ");
        let response = Number(num) > _palabras.length ? "Numero excede el limite" : _palabras[Number(num) - 1];
        res.send(`${response}`)
    }else{
        res.send("Porfavor envia un numero")
    }
})

app.get("/user/:id/:recurso", (req, res, next) => {
    let {id, recurso} = req.params
    let {name, lastname} = req.query
    res.json({id, name})
})


// SUMAS

// http://localhost:3000/suma/4/4
app.get("/suma/:a/:b", (req, res, next) => {
    let {a, b} = req.params
    let suma = Number(a) + Number(b);
    res.json({suma})
})


// http://localhost:3000/suma?a=3&b=10
app.get("/suma", (req, res, next) => {
    let {a, b} = req.query
    let suma = Number(a) + Number(b);
    res.json({suma})
})

// http://localhost:3000/operacion/5+6
app.get("/operacion/:op", (req, res, next) => {
    let {op} = req.params
    let nums = op.split ("+");
    let suma = Number(nums[0]) + Number(nums[1]);
    res.json({suma})
})

//TESTING VERBOS

app.get("/testing", (req, res, next)=> {console.log(req.body); res.send(`Respuesta desde ${req.method}`)});
app.post("/testing", (req, res, next)=> {res.send(`Respuesta desde ${req.method}`)});
app.put("/testing", (req, res, next)=> {res.send(`Respuesta desde ${req.method}`)});
app.delete("/testing", (req, res, next)=> {res.send(`Respuesta desde ${req.method}`)});

// DESAFIO FINAL
let frase_final = "Frase Inicial"
app.post("/api/palabras", (req, res, next) => {
    let {palabra} = req.body;
    let _frase_final = frase_final.split(" ");
    _frase_final.push(palabra);
    res.json({posicion: _frase_final.length, agregada: palabra, _arr: _frase_final});
})

app.put("/api/palabras/:pos", (req, res, next) => {
    let {palabra} = req.body;
    let {pos} = req.params;
    let pos_arr = Number(pos) - 1;
    let _frase_final = frase_final.split(" ");
    let anterior = _frase_final.splice(pos_arr, 1, palabra);
    console.log(_frase_final);
    res.json({anterior, actualizada: palabra, _arr: _frase_final});
})

app.listen(PORT, ()=> {console.log(`http://localhost:${PORT}`);})