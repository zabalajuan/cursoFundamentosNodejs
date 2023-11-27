

// function otraFuncion(){
//     seRompe();
// }


// function seRompe(){
//     return 3 + z;
// }

// try {
//     // seRompe();
//     otraFuncion()

// }catch(err) {
//     console.group('Error capturado');
//     console.error('Vaya!, algo se ha roto...');
//     // console.error(err);
//     console.error(err.message);
//     console.error('Pero no pasa nada, lo hemos capturado')
//     console.groupEnd('Error capturado');
// }

// console.log( 'esto de aquí esta al final')


// que pasa cuando es asincrono

function otraFuncion(){
    seRompe();
}


function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try {
            return 4 + z;
        } catch (err){
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    }, 1000);
}

try {
    // seRompe();
    // otraFuncion();
    seRompeAsincrona((err) => {
        console.log('Hay Error-------------')
        console.error(err.message);
    });

}catch(err) {
    console.group('Error capturado');
    console.error('Vaya!, algo se ha roto...');
    // console.error(err);
    console.error(err.message);
    console.error('Pero no pasa nada, lo hemos capturado')
    console.groupEnd('Error capturado');
}

console.log( 'esto de aquí esta al final')