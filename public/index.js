const socket = io().connect()

socket.on('mostrar-productos', data => {
   let html = data.map(producto =>  {
        return `
                <li>Se agego <strong>${producto.nombre}</strong></li>
               `
    })
    document.querySelector('#lista').innerHTML = html.join(' ')
});
/* -------------------------------------------------------------------------- */
/*                                    CHAT c TIEMPO                           */
/* -------------------------------------------------------------------------- */

let date = new Date()
let time =  `
             ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
             ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
            `

socket.on('mostrar-chat', data => {
    socket.emit('mostrar-tiempo',time)

    // socket.on('mostrar-tiempoTabla', resp => {
    // })
    
    data.forEach(c => {
        document.querySelector('#lista').innerHTML += `
                                                        mensaje: ${c.mensaje}tiempo:${time}<br>
                                                      `
    })
});
 
socket.on('connection', socket => {
    render(mensaje.productos);
})