//Objetos y Arrays

let edades = [ 34, 21, 25, 28, 36, 44]

let estudiantes = [
    {
        nombre : 'Stefano',
        edad : '34',
        pais : 'Argentina',
        genero : 'M'
    },
    {
        nombre : 'Juan',
        edad : '21',
        pais : 'Argentina',
        genero : 'M'
    },
    {
        nombre : 'Pedro',
        edad : '25',
        pais : 'Argentina',
        genero : 'M'
    },
    {
        nombre : 'Marcos',
        edad : '28',
        pais : 'Chile',
        genero : 'M'
    },
    {
        nombre : 'Adrian',
        edad : '36',
        pais : 'Peru',
        genero : 'M'
    },
    {
        nombre : 'Jonatan',
        edad : '44',
        pais : 'Argentina',
        genero : 'M'
    }
]

// ForEach
let edadesDoblada = []

edades.forEach(x => edadesDoblada.push (x* 2))
//console.log(edadesDoblada);

// Map
let edadesDoblada3 = edades.map(x=> x * 3)
//console.log(edadesDoblada3);

// Filter
let menores_25 = estudiantes.filter(estudiantes => estudiantes.edad < 25)
//console.log(menores_25);

// Includes 
//console.log(edades.includes(34)); 

// Reduce (ver videos en youtube pq no entendi)

//Boolean return category (every sign que todos los elemntos del array deben cumplir esa funcion y some es para saber si por lo menos alguno)
const isArgentino = estudiantes.every(estudiantes => estudiantes.pais == "Argentina")
//console.log("Todos mi estudiantes son de Argentina? ", isArgentino);

const isPeruano = estudiantes.some(estudiantes => estudiantes.pais == "Peru")
//console.log("Hay algun peruano? ", isPeruano);

// Organiza de Menor a Mayor
const organizadoMenMay = edades.sort((a,b) => a - b)
//console.log(organizadoMenMay);

// Organiza de Mayor a Menor
const organizadoMayMen = edades.sort((a,b) => b - a)
//console.log(organizadoMayMen);


// Object.keys Object.values Object.entries
let mi_obj = {
    "Boca" : 20,
    "River" : 15,
    "Talleres" : 10,
    "Belgrano" : 2,
    "Racing" : 19,
}
let sum = 0
for (const copas of Object.values(mi_obj)) {
    sum += copas;
}
console.log(`Cantidad de copas ${sum}`);
console.log(Object.keys(mi_obj));
//console.log(Object.entries(mi_obj));