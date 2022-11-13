function escribirArchivo(nombreArchivo, cb){
    //console.log(`estamos escribiendo el archivo ${nombreArchivo}`);
    cb(nombreArchivo);
}

function logger (name){
    //console.log(`La fecha de escritura del archivo ${name} es ${new Date()}`);
}

escribirArchivo('CLIENTES', logger)

////////////////////////////////////////////////////////////////////////////////////

const resta = (a,b) => a - b;
const suma = (a,b) => a + b;
const multiplicacion = (a,b) => a * b;

function operacion (a,b,cb){
    return cb(a,b)
}

//console.log(operacion(2,5,suma));

/////////////////////////////////////////////////////////////////////////////////////
class Contador {
    static cuentageneral = 0;
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }

    obtenerResponsable() {
        return `El responsable es ${this.nombre}`
    }
    obtenerCuentaIndividual(){
        return `La cuenta de ${this.nombre} es ${this.contador}`
    }
    contar(){
        this.contador++;
        Contador.cuentageneral++;
    }
    obtenerCuentaGlobal(){
        return `La cuenta global es ${Contador.cuentageneral}`
    }
}

let martin = new Contador ("Martin");
let pedro = new Contador ("Pedro");

martin.contar();
martin.contar();
martin.contar();
martin.contar();
martin.contar();
console.log(martin.obtenerCuentaIndividual());

console.log(pedro.obtenerResponsable());
pedro.contar();
pedro.contar();
console.log(martin.obtenerCuentaGlobal());
console.log(pedro.obtenerCuentaIndividual());



