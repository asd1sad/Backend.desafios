/* -------------------------------------------------------------------------- */
/*                                  OPCION 1                                  */
/* -------------------------------------------------------------------------- */
// const fs = require('fs')

// const leerArchivo = async() => {
//     console.log(await fs.promises.readFile('./productos.txt','utf-8'))
// }
 
// module.exports =  {leerArchivo}


 /* -------------------------------------------------------------------------- */
 /*                                  OPCION 2                                 */
 /* -------------------------------------------------------------------------- */
 const fs = require('fs')


class Contenedor {
    constructor(ruta){
        this.ruta = ruta;
    }
    
    async leerArchivo () {
    let data = await fs.promises.readFile( this.ruta ,'utf-8')
    let dataParseada = JSON.parse(data)
    return dataParseada 
    }
}
 

module.exports = Contenedor;

 