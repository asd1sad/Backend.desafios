const express = require('express')
const app = express()

const contenedorDB = require('./contenedorDB')
const contenedorDBfunciones = new contenedorDB() 

const port = process.env.PORT || 3000

const { Server:HttpServer } = require('http')
const { Server:IOServer } = require('socket.io')
const { read } = require('fs')

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
/* ------------------------------------ _ ----------------------------------- */
const chat = [
    { mensaje:'bienvenidos' }
]

const tiempo = [
    { horario:'no definido' }
] 
 
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/' , (req,res) => {
    contenedorDBfunciones.creaTabla()
    res.render('index', {
        mensaje,
        productos
    })
})
 
app.post('/form' , (req,res) => {
    // const data = req.body

    // productos.push(data) 

    res.render('index',{mensaje,productos}) 
})

app.post('/chat' , (req,res) => {
    // const data = req.body
    // chat.push(data) 
    // contenedorDBfunciones.selectChat()
    // contenedorDBfunciones.selectChatWhere()
    // contenedorDBfunciones.update()
    // contenedorDBfunciones.delete()
    // contenedorDBfunciones.deleteWhere()
    const dataS = req.query
    contenedorDBfunciones.insertaChat(dataS)
    res.render('index',{mensaje,productos,chat,tiempo}) 
})

io.on('connection', socket => {
    // console.log(socket.id)

    socket.emit('mostrar-productos', productos)

    socket.emit('mostrar-chat', chat)

    socket.on('mostrar-tiempo',resp => {
        tiempo.push(resp)
    })

    socket.emit('mostrar-tiempoTabla',tiempo)
    })

    

httpServer.listen(port, err => {
    if (err) throw new Error(`Error en el servidor: ${err}`)

    console.log(`Server running on  ${port}.`)
})


