// const productos = require ('./poductos/productos.js')
const Contenedor = require ('./clase.js')
const express = require('express')

const app = express()
const { Router } = express
const routerProductos = Router()

app.use(express.json())
app.use('/static' , express.static(__dirname + 'public'))
app.use(express.static('file'))  
app.use(express.urlencoded({ extended: true}))  

const contenedor = new Contenedor('./productos.txt')

routerProductos.get('/', async (req, res) => {
   const todosProductos = await contenedor.getAll()

   res.send(todosProductos)
})

routerProductos.get('/:id', async (req, res) => {
    const { id } = req.params
    
    const encontrado = await contenedor.getById(id)

    await encontrado ?   res.json({encontrado}) :
     res.json({error: 'producto no encontrado'})  
})
 

routerProductos.post('/', async (req, res) => {
    const objProducto = req.body

    await contenedor.save(objProducto)
 
    res.json({
        msg:'¡Agregado exitosamente!',
        objProducto
    })
})
 
  
routerProductos.put('/:id', (req, res) => {
    const { id } = req.params

    const objProducto = req.body

    contenedor.updateById( {id: parseInt(id) , ...objProducto})
    res.json({
        msj:'ACTUALIZADO',
    })
})


routerProductos.delete('/:id', async (req, res) => {
    const { id } = req.params

    await contenedor.delete(id)

    res.json({
        msj:'deleted',
    })
})


app.use('/api/productos', routerProductos)

app.use( (err, req, res, next) => {
    console.error(err.stack);
    res.send({err});
})

app.listen(8080, () => {})