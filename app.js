/** Cargamos los Dependencias */

const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs');

/** Definimos las variables */
/* const base = 7; */

/** Metodo */
console.clear();

/* console.log( argv )
console.log('base: yargs ' + argv.base) */
/* console.log(process.argv) *

/* const [,,arg3 = 'base=5'] =process.argv
const [,base] = arg3.split('=')
console.log(base);*/


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow,  'creado'))
    .catch(err => console.log( err )) 


