const express = require("express")
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// View engine
app.set("views", "./views/ejs")
app.set("view engine", "ejs")

let estudiantes = [];
app.get("/datos", (req, res, next) =>{ 
    res.render("index-pug", req.query)
});

app.get("/", (req, res, next) =>{ 
    res.render("index", {estudiantes})
});

app.post("/create", (req, res, next) =>{ 
    estudiantes.push(req.body)
    res.redirect("index")
});

app.listen(PORT);