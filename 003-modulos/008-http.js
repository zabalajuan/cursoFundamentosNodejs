//nos traemos primero el modulo
const http = require('http');

//le tenemos que pasar una funcion con dos parametros
// parametro 1: request
// parametro 2: response
// http.createServer((req, res)=> {
//     console.log('Nueva petición!');
//     console.log(req.url);


//     res.writeHead(201,{'Content-Type':'text/plain'})
//     //escribir respuesta al usuario
//     res.write('Hola, ya se usar HTTP de NodeJS')

//     res.end();
//     //vamos a usar para inicializar un puerto de los reservados, el 3000, el 8080
//     //usar otro puerto puede requerir permisos de admin, NO es recomendable con
//     // node darle permisos de admin porque estaríamos dando acceso al servidor en caso de una falla de
//     //seguridad
// }).listen(3000);

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201,{'Content-Type':'text/plain'})
    // //escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS')

    // res.end();

}

console.log('Escuchando http en el puerto 3000...')