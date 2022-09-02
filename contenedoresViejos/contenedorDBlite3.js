const { options } = require('../sqllite3/conexionDBlite3.js')
const knex = require('knex')(options)

class ContenedorDB {
    constructor() {
        this.nombreTabla = 'chat';
    }
 
    async creaTabla() {
                try {
                    await knex.schema.createTable(this.nombreTabla, table => {
                            table.increments('id')
                            table.string('name')  
                            table.string('email')  
                            table.string('password')  
                            table.integer('edad')  
                        })
                        console.log('Tabla creada')
                        .finally(() => knex.destroy())
                } catch (error) {
                    console.log(`ERROR = ${error}`);
                }
            }

    async insertaChat(chat) {
        try {
            const result = await knex(this.nombreTabla).insert({
                            name:`${chat}` 
                        })
            
                        return result
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async selectChat() {
        try {
            const result = await knex.from(this.nombreTabla).select('*')
            return console.log(result)
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async selectChatWhere() {
        try {
            const result = await knex.from(this.nombreTabla).select('*').where('name', '=', 'hola').orderBy('id','desc')
            return console.log(result)
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async update() {
        try {
            const result = await knex.from(this.nombreTabla).where('name','hola').update({
                name: 'estbean'
            })
            return console.log(result)
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async delete() {
        try {
            const result = await knex.from(this.nombreTabla).del()
            return console.log('Eliminacion exitosa')
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async deleteWhere() {
        try {
            const result = await knex.from(this.nombreTabla).where('name','=','hola').del()
            return console.log('Eliminacion condicionada exitosa')
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }

    async batch() {
        try {
            const result = await knex.from(this.nombreTabla).where('name','=','hola').del()
            return console.log('Eliminacion condicionada exitosa')
        } catch (error) {
            console.log(error)
        }
        finally{(() => knex.destroy() )}
    }
}

module.exports = ContenedorDB