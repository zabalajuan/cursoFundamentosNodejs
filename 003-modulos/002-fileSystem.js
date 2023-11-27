//debemos traer el modulo
const fs = require('fs');

//

function leer(ruta, callback){
    fs.readFile(ruta, (err, data) => {
        // console.log(data.toString());
        callback(data.toString());
    })
}

function escribir (ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err)=> {
        if (err){
            console.error('No he podido escribirlo', err);
        }else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar (ruta, cb){
    fs.unlink(ruta, cb);
}

// leer(__dirname + '/002-archivo.txt', console.log);

// escribir(__dirname + '/002-archivo1.txt', 'Soy un archivo nuevo', console.log);

borrar (__dirname + '/002-archivo1.txt', console.log);