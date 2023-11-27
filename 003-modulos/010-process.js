
//podríamos importar el proceso como modulo
//const proceso = require('process');
// no hay necesidad porque viene como un avariable global


process.on('beforeExit', ()=> {
    console.log('El proceso va a terminar______');
});

process.on('exit', ()=> {
    console.log('Vale, el proceso acabó______');
    //ya estamos totalmente desconectados
    //lo que se ponga aquí debe ser sincrono
    //se ejecutará solamente en el hilo principal
    setTimeout(() => {
        console.log('Esto nunca se va a imprimir');
    },1000)
});

//para escuchar cuando el proceso se rompa y no hayamos manejado el error
process.on('uncaughtException', (err, origen)=>{
    console.error('Vaya, se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene  desde las excepciones');
    },500)
})



functionQueNoexiste();

console.log('Esto si el error no se recoje, no sale');

setTimeout(() => {
    console.log('Esto si va a imprimir');
},1000)
//para promesas rechazadas
// process.on('uncaughtException')