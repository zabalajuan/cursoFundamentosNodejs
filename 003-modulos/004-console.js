console.log( 'Algo');
// cuando se quiere informar
console.info('Algo');

console.error('Algun error');

console.warn('Algun warning');

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'D'
    }
]

console.log(tabla);

console.table(tabla);

//agrupar
console.log( 'Conversación:')
console.log( 'Hola');
console.log('Bla bla bla');
console.log('Adios');

console.group('conversacion 2:');
console.log( 'Hola');
    console.group('Bla');
        console.log('Bla bla bla');
        console.log('Bla bla bla');
        console.log('Bla bla bla');
    console.groupEnd('Bla')
console.log('Adios');
console.groupEnd('conversacion 2:')

console.log('Otra cosa');

function function1(){
    console.group('function 1');
    console.log('esto es de la funcion 1');
    console.log('esto es de la funcion 1 tambien');
    function2()
    console.log('Hemos vuelto a la funcion 1');
    console.groupEnd('function 1')
}

function function2(){
    console.group('function 2');
    console.log('esto es de la funcion 2');
    console.groupEnd('function 2')
}

console.log( 'Empezamos');
function1();

//Contador
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
