async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
};

async function adios(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);
    })
};

async function hablar (nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('bla bla bla bla...')
            resolve(nombre);
            //reject('Hay un error reject');
        }, 1000);
    })
};


async function main(){
    let nombre = await hola('Carlos');
    await hablar();
    console.log('intermedio de hablar');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso...')
}

console.log('Empezamos el proceso');
main();
console.log('Segunda instrucción ejecutada')
//console.log('Terminamos el proceso...')
//--------