/* -------------------------------------------------------------------------- */
/*                                  OPCION 1                                  */
/* -------------------------------------------------------------------------- */
const fs = require('fs')

const leerArchivo = async() => {
    console.log(await fs.promises.readFile('./productos.txt','utf-8'))
}

module.exports =  {leerArchivo}




























































 /* -------------------------------------------------------------------------- */
 /*                                  OPCION 2      (no terminada)                            */
 /* -------------------------------------------------------------------------- */
//  const fs = require('fs')


// class Contenedor {
//     constructor(ruta){
//         this.ruta = ruta;
//     }
    
//     leerArchivo = async() => {
//         console.log(await fs.promises.readFile('./productos.txt','utf-8'))
//     }

//  }

// module.exports = Contenedor;


 