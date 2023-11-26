
//el callback ya no es necesario tenerlo como un argumento
function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
};

function adios(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);
    })
};

function hablar (nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('bla bla bla bla...')
            // resolve(nombre);
            reject('Hay un error reject');
        }, 1000);
    })
};


//----------
console.log('Iniciado el proceso...');
hola('Carlos')
    .then(hablar)
    // .then(hablar)
    // .then(hablar)
    // .then(hablar)
        .then(adios)
            .then((nombre)=> {
                console.log('Terminado el proceso...');
            })
            .catch(error => {
                console.error('Ha habido un error...');
                console.error(error);
            })