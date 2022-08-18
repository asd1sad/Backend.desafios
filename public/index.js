// !ejemplos
// const socket = io().connect()

// socket.on('mensaje-server', data => {
//     console.log(data)
//     socket.emit('mensaje-server', 'Hola vaquero')
// });

// socket.on('disconnect', () => {
//     console.log('server disconnected')
// });

const socket = io().connect()

socket.on('mostrar-productos', data => {
   let html = data.map(producto =>  {
        return `
                <li>Se agego <strong>${producto.nombre}</strong></li>
               `
    })
    document.querySelector('#lista').innerHTML= html.join(' ')
});

const date = new Date()
let tiempo = `
            ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
            ` 

socket.on('mostrar-chat', data => {
    
    data.forEach(c => {
       
        document.querySelector('#chat').innerHTML+=  `
                                                    <li>${tiempo} dice: ${c.mensaje} </li>
                                                     `
    })
});

// const render = productos => {
    //     let listado = document.querySelector('#listado')
    
        // const date = new Date()
        // como le pongo el formato 08 a minutos y segundos y horas
        //  const tiempo = `
        //                  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
        //                  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
        //                 `

    // document.querySelector('#parrafo').innerHTML=`Hola ${tiempo}`

//     let html = productos.map( p => {
//         return  `<li>
//                 Nombre:${p.nombre}
//                 Precio:${p.precio}
//                 </li>`
//     })
//     listado.innerHTML = html.join(' ')   
//     let timeTable = document.querySelector('#time')
//     timeTable.innerHTML = tiempo
// }

// const addProduct = () => {
//     const nombre = document.querySelector('#nombre').value
//     const precio = document.querySelector('#precio').value

//     const producto = {nombre, precio}
//     server.emit('producto-nuevo', producto)/* , id => {
//         console.log(id);
//     }) */
//     return false
// }

// mensaje es nombre de parametro
socket.on('connection', socket => {
    
    render(mensaje.productos);
})