let express = require ("express");
let app = express();
let hbs = require("express-handlebars")
const PORT = 3001;


app.engine('handlebars', hbs.engine())

app.set("views", "./views/hbs");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    let data = {
        titulo: "Shrek",
        mensaje: "donde esta burro?",
        autor: "el Gonza Mai",
        version: "2014.1.4"
    }
   res.render("index", data) 
})



app.listen(PORT, ()=> {console.log(`Server on http://localhost:${PORT}`);})