class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return(`${this.nombre} ${this.apellido}`)
    }
    addMascotas(nombre){
        this.mascotas.push(nombre);
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre : nombre, autor : autor});
    }
    getBookNames(){
        return this.libros.map(libro => libro.Nombre)
      }
}

const usuario1 = new Usuario('Stefano', 'Montanari')
console.warn('Nuevo usuario creado')
console.log(usuario1)
usuario1.addMascotas('Perro')
usuario1.addMascotas('Gato')
usuario1.addMascotas('Mono')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)

console.log(`Cantidad de mascotas : ${usuario1.countMascotas()}`)
usuario1.addBook('EL HECHIZO DEL AGUA', 'DECIDIDAS')
usuario1.addBook('BASTARDA', 'AL FINAL MUEREN LOS DOS')
console.warn('Nuevos Libros Agregados')
console.log(usuario1)
console.log(`Nombres de Libros agregados : ${usuario1.getBookNames()}`)