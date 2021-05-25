
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();




// const base= 14654545442;


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] =  arg3.split('=');
// console.log(base);
 
crearArchivo( argv.b, argv.l, argv.h )
                .then( nombreArchivo => console.log(`${nombreArchivo} creado exitosamente`) )
                .catch( err => console.log( err ) );



