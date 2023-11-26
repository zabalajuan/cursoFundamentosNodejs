// Creamos una variable de entorno
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'sin web';
;
console.log('Hola '+ nombre);
console.log('Mi web es '+ web);
console.log('probando Nodemon');
//para ejecutarlo, asignando la variable nombre, le damos el comando a la terminal:
// NOMBRE=Carlos node 001-variables-de-entorno/entorno.js
// NOMBRE=Carlos WEB=juanzabala.tech node 001-variables-de-entorno/entorno.js