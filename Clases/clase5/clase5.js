



// PUNTO 1
/*
let response = {}

for (let i = 0; i < 10000; i++) {
    let num_random = Math.round((Math.random() * (20 - 1) + 1));
    response[num_random] = response.hasOwnProperty(num_random) ? response[num_random] + 1 : 1;
    //response[num_random] = response[num_random] ? response[num_random] + 1 : 1;
}

console.log(response);
*/

/*
//PUNTO 2 : Array de Objetos
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let respuesta = productos.reduce((p, obj, i)=>{
    if(i == 0){
        return {
            names: obj.nombre,
            total: obj.precio,
            minor: obj,
            major: obj
        }
    }    
    let minor = p.minor.precio < obj.precio ? p.minor : obj;
    let major = p.major.precio > obj.precio ? p.major : obj;
    return {
        names: `${p.names}, ${obj.nombre}`,
        total: p.total + obj.precio,
        minor,
        major
    }
}, {})
respuesta.promedio = (respuesta.total / productos.length).toFixed(2);

console.log(respuesta);
*/
