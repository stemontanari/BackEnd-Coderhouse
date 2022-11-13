/*
function mostrarLetras(word, timer){
    let mifunction = setInterval(letras, timer)
    let counter = 0;
    function letras (){
        if (counter != word.length) {
            console.log(word.slice(counter, counter + 1));
            counter ++;
        } else {
            fin();
            clearInterval(mifunction)
        }
    }
}

let fin = () => console.log('FINALIZAMOS LA EJECUCION!');

mostrarLetras('Julian', 1000)
mostrarLetras('Carola', 1500)
mostrarLetras('Stefano', 500)

setInterval(() => {}, 10000)
*/