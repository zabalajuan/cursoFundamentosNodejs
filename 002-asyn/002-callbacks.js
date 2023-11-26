// function soyAsincrona(miCallback){
//     // console.log('Hola, soy una funcion asincrona');
//     //para volver la función asincrona, podemos usar un timeout por jemplo
//     setTimeout(() => {
//         console.log('Estoy siendo asincrona');
//         miCallback();
//     }, 1000);
// }
// console.log('Iniciando proceso');
// soyAsincrona(function(){
//     console.log('Terminando proceso...');
// });

// ------------------- Iteración nueva -------------
function hola(nombre, miCallback){
    setTimeout(()=> {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    },1000)
};

function adios(nombre, otroCallback){
    setTimeout(()=> {
        console.log('Adios ' + nombre);
        otroCallback();
    },1000)
}

console.log('Iniciando proceso');
hola('Carlos',function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...');

    })
})