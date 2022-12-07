let nombre = 'Stefano'
let edad = 21
let moto = 1500
let series = ['Breaking Bad','Prision Break','Greys Anatomy']

//console.log(nombre, edad, moto, series);
edad += 1;
//console.log(`Edad ${edad}`);
series.push('Pasion de Gavilanes')
//console.log("--------");
//console.log(series);

const multiplicador = num => num * 5;
const resta = num => num - 3;  

function clase (num, cb) {
    return cb(num);
}
 
console.log(clase(10, resta));

class claseCoder {
    static hora = new Date();
    constructor() {

    }
    suma(){

    }
}