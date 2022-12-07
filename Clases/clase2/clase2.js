function gritarNombre(nombre) {
    (function (){
        //console.log('Desde un IIFE');
    })()
    return function () {
        //console.log(`${nombre} !!!!`);
    }
}

gritarNombre("STEFANO")();

//////////////////////////////////////////////////////////////////////

// DESAFIO GENERICO

let mostrarLista = (function (datos = []){
    let response = `Lista Vacia`;
    if(datos.length > 0){
        response = datos.join(" - ");
    }
    return response;
})([3,7,11])

//let datos = [2,5,7,9];
//console.log(mostrarLista(datos));

//console.log(mostrarLista);

function multiplicador ( num1 = 0) {
    let num = num1;
    function multiplicar(num2 = 0){
        return num * num2;
    }
    return{
        multiplicar
    }
}

let multiplicador_var = multiplicador(5);
let duplicar = multiplicador(2);
let triplicar = multiplicador(3);

//console.log(duplicar.multiplicar(10));

////////////////////////////////////////////////////////////////