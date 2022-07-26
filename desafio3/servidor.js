const Contenedor = require('./contenedor.js');

const fs = require('fs')

const contenedor = new Contenedor('./productos.txt')

const tirameElarray = async () => await contenedor.leerArchivo()
const express = require('express');
const app = express()


app.get('/productos',async (req, res) => { 
    res.send(await tirameElarray() )
    
})

app.get('/productoRandom',async (req, res) => {
    const array =  await tirameElarray()
    const randomElement =  Math.floor(Math.random()*(array.length) )
   
    res.send ( array[randomElement] )
  
})
 
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', err => console.log(err))

 
 