
function hola(nombre, miCallback){
    setTimeout(()=> {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    },1000)
};

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('bla bla bls bls...')
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(()=> {
        console.log('Adios ' + nombre);
        otroCallback();
    },1000)
}


function conversacion(nombre, veces, callback){
    //verbosidad: llamar a la misma funcion pero con información distinta
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso');
hola('Carlos', function(nombre){
    conversacion(nombre, 4,function() {
        console.log('Terminamos...')
    })
})
// ---

// console.log('Iniciando proceso');
// hola('Carlos', function(nombre){
//     adios(nombre,function(){
//         console.log('Terminamos')
//     });
// })


// Este seria un ejemplo del callback hell
// hola('Carlos',function(nombre){
//     hablar(()=> {
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Terminando proceso...');

//                 })

//             })

//         })

//     })

// })