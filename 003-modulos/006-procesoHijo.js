//Procesos hijos, libreria Child process
//Llamamos la libreria
// const {exec} = require('child_process');
// const { stdout, stderr } = require('process');

//este comando es equivalente a decir, solo que el de arriba trae mas elementos
// const exec = require('child_process').exec;

//que nos liste el directorio
// exec('ls -la', (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

//para ejecutar un comando diferente, puede ser llamar un archivo en python, o cualquier otro proceso
// exec('node 003-modulos/004-console.js', (err, stdout, stderr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

//----------------------

const {exec, spawn} = require('child_process');
//nos va a permitir un proceso nuevo de node js

//a diferencia del exec los parametros no pueden ir despues del comando con espacio
// debe ser un array
let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data',function(dato) {
    console.log('¿Está muerto?')
    console.log(proceso.killed);
    console.log(dato.toString());
})

//detectar cuando se termina el proceso
proceso.on('exit', ()=>{
    console.log('El proceso terminó...');
    console.log(proceso.killed);
})
