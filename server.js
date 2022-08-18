const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const { Server:HttpServer } = require('http')
const { Server:IOServer } = require('socket.io')

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}))

// !VARIALBES_GLOBALES  
const  mensaje = 'Todo 2002'
const productos = [
    { id:1, nombre: 'Botas'    , precio: 100 },
    { id:2, nombre: 'Lompas'   , precio: 200 },
    { id:3, nombre: 'Sombreros', precio: 300 }
]
const chat = [
    { mensaje:'bienvenidos' }
]
// const tiempo = []
/* -------------------------------------------------------------------------- */
/*                                     EJS                                    */
/* -------------------------------------------------------------------------- */
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/' , (req,res) => {
    // console.log(usuarios)
    res.render('index',{
        mensaje,
        productos
    })
})

app.post('/form' , (req,res) => {
    const data = req.body
    productos.push(data) 

    // console.log( JSON.stringify(usuarios));

    res.render('index',{mensaje,productos}) 
})
app.post('/chat' , (req,res) => {
    const data = req.body
    chat.push(data) 

    // console.log( JSON.stringify(usuarios));

    res.render('index',{mensaje,productos,chat}) 
})
/* --------------------------------- termina -------------------------------- */
// !ejemplos
// io.on('connection', socket => {
//      console.log(socket.id)

//      socket.on('disconnect', () => {
//          console.log('user disconnected',socket.id)
//      });

//     socket.emit('mensaje-server', 'Hola parcero')

//     socket.on('mensaje-server', data => {
//         console.log(data)
//     });
io.on('connection', socket => {
    // console.log(socket.id)

    socket.emit('mostrar-productos', productos)
    socket.emit('mostrar-chat', chat)

    socket.on('mensaje-server', data => {
        console.log(data)
    });
    // socket.on('producto-nuevo', async (producto,cb) => {
    //     productos.push(producto)

    //     const mensaje = {
    //         mensaje:'Producto agregado',
    //         productos 
    //     }

        // io.sockets.emit('mensaje-servidor', mensaje)
    // })
})
/* ------------------------------------  ----------------------------------- */


httpServer.listen(port, err => {
    if (err) throw new Error(`Error en el servidor: ${err}`)

    console.log(`Server running on  ${port}.`)
})


