const fs =  require ('fs')

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async #readFileFunction(ruta){
        let archivo = await fs.promises.readFile(ruta,'utf-8')
        let archivoParseado = await JSON.parse(archivo)
        return archivoParseado
    }

    async save(obj){
        try {
            // let data = await fs.promises.readFile( this.ruta,'utf-8')
            // let dataParse = JSON.parse(data)
            let dataArch = await this.#readFileFunction(this.ruta)
            
            if (dataArch.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify( [...dataArch, {...obj, id: dataArch[dataArch.length-1].id + 1} ], null, 2))
            }
            else {
                await fs.promises.writeFile(this.ruta, JSON.stringify( [{...obj, id: 1}], null, 2))
            }
            console.log(`El archivo tiene el id ${ dataArch[dataArch.length-1].id + 1} `)
            } catch (error) {
                console.log(error)
            }

        }

    async updateById(obj){
        try {
            let dataArch = await this.#readFileFunction(this.ruta)

            const objIndex = dataArch.findIndex(prod => prod.id === obj.id)
            if (objIndex !== -1) {
                dataArch[objIndex] = obj
                await fs.promises.writeFile(this.ruta, JSON.stringify( dataArch, null, 2))
                return {msg: 'Todo okey el put'}
            }
            else {
                return {error : 'No existe el producto'}
            }
            } catch (error) {
                console.log(error)
            }

        }

    async getById(id) {
        try {
        //    let data = await fs.promises.readFile( this.ruta,'utf-8')
        //    let dataParse = JSON.parse(data)
        let dataArch = await this.#readFileFunction(this.ruta)

           let productoEncontrado = dataArch.find(p => p.id == id)
           if(productoEncontrado) {
            return productoEncontrado
           }else{
            return console.log(null)
           } 
        } catch (error) {
            console.log(error)
        }
    }
    
    async getAll() {
        try {
        //    let data = await fs.promises.readFile( this.ruta,'utf-8')
        //    let dataParse = JSON.parse(data)
        let dataArch = await this.#readFileFunction(this.ruta)

           if(dataArch.length) return dataArch
           else return console.log(null)
             
        } catch (error) {
            console.log(error)
        }
    }
    async delete(id) {
        try {
            // let data = await fs.promises.readFile( this.ruta,'utf-8')
            // let dataParse = JSON.parse(data)
            let dataArch = await this.#readFileFunction(this.ruta)

            let producto = dataArch.find(p => p.id == id)
            
            if(producto) {
                let eliminado = dataArch.filter(p => p.id != id)
                await fs.promises.writeFile(this.ruta, JSON.stringify( eliminado , null, 2))
                console.log('Exitoso')
            }else{
                console.log('NO PRODUCT FOR SUCH ID')
            }
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        try {
            // let data = await fs.promises.readFile( this.ruta,'utf-8')
            // let dataParsee = JSON.parse(data)
            let dataArch = await this.#readFileFunction(this.ruta)

            if(dataArch.length) { 
            await fs.promises.writeFile(this.ruta, JSON.stringify( [] , null, 2))
            console.log('Exitoso')
            } else {
                console.log('Ya esta vacio')
            }
        } catch (error) {
            console.log(error)
        }
    }
    // ! función para el put
    async overWrite(id,detalleNuevo,detalle) {
        try {
            // let data = await fs.promises.readFile( this.ruta,'utf-8')
            // let dataParse = JSON.parse(data)
            let dataArch = await this.#readFileFunction(this.ruta)

            let producto = dataParse.find(p => p.id == id)
            
            if(producto) {
                let modificado = dataArch.replace(detalleNuevo , detalle)
                await fs.promises.writeFile(this.ruta, JSON.stringify( modificado , null, 2))
                console.log('Exitosa modificacion')
            }else{
                console.log('Modificacion no lograda')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Contenedor