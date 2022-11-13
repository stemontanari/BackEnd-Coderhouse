// FS: Modo Sincrónico

let fs = require('fs')

try {
    let fyh_actual = `${new Date().toLocaleDateString()}`;
    let archivo = fs.readFileSync("./fyh.txt", "utf-8")
    console.log(archivo);
} catch (error) {
    console.log(error);
}
