const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base, l, h) =>{
    
try {
    let salida='';

    console.clear();

         

    for (let index = 1; index <=h; index++) {
        salida += 
        ` ${base} x ${index} = ${index * base} 
`;
    }
    if (l) {
        console.log('=================='.green);
        console.log(`  Tabla del ${ base }`.brightRed);
        console.log('=================='.green);
        console.log(salida.rainbow);
        
    }

    fs.writeFileSync( `./salida/Tabla del ${base}.txt`, salida);

    return `Tabla del ${base}.txt`.blue;
    
} catch (err) {
    throw err;
    
}
}

module.exports = {
    crearArchivo
}
