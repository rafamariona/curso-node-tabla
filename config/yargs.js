const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar',
                    demandOption: true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'Muestra la tabla en consola',
                    default: false
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Hasta donde llegará la tabla',
                    demandOption: true
                })
                .check((argv, options) => {
                    if ( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                    if ( isNaN( argv.h) ) {
                        throw 'Hasta tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports =argv;