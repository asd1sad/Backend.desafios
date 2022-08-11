const express = require('express')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
// !VARIALBES_GLOBALES  
const  mensaje = 'USUARIOS_'
const  usuarios = []

/* -------------------------------------------------------------------------- */
/*                                     EJS                                    */
/* -------------------------------------------------------------------------- */
app.set('views', './views/ejs')
app.set('view engine', 'ejs')

app.get('/' , (req,res) => {
    console.log(usuarios)
    res.render('index',{
        mensaje,
        usuarios
    })
})

app.post('/form' , (req,res) => {
    const data = req.body
    usuarios.push(data) 

    console.log( JSON.stringify(usuarios));

    res.render('index',{mensaje,usuarios}) 
})
/* --------------------------------- termina -------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                     PUG                                    */
/* -------------------------------------------------------------------------- */
// app.set('views', './views/pug')
// app.set('view engine', 'pug')
 
// app.get('/', (req,res) => {
    
//         res.render('index', {
//             titulo:'PUG', 
//             mensaje,
//             usuarios 
//         })
// })
 
// app.post('/form', (req,res) => {
//     const usuario = req.body 
//     usuarios.push(usuario)
//     console.log(usuario)
//     console.log(req.body )
//     console.log(req.body.data )

//     res.render('index', {
//             titulo:'PUG', 
//             mensaje,
//             usuarios 
//         })
// })


/* --------------------------------- termina -------------------------------- */
















/* -------------------------------------------------------------------------- */
/*                                 HANDLEBARS                                 */
/* -------------------------------------------------------------------------- */
// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {

//     res.render('template', {
//         titulo:'Handlebars',
//         usuarios
//     })
// })

// app.post('/form', (req, res) => {
//     const usuario = req.body
//     usuarios.push(usuario)

//     res.render('template',{
//         usuarios
//     })
// })



// app.post('/form', (req, res) => {
//     const usuario = req.body
//     usuarios.push(usuario)

//     res.render('index',{
//         usuarios
//     })
// })
/* --------------------------------- termina -------------------------------- */










/* -------------------------------------------------------------------------- */
/*                                EJEMPLO METER                               */
/* -------------------------------------------------------------------------- */
// app.get('/datos', (req, res) => {
//     const { min,value, max, titulo } =  req.query
//     // console.log(obj)
//     res.render('index', {min,value,max,titulo })
// })
/* ------------------------------------ _ ----------------------------------- */

const port = process.env.PORT || 3000

app.listen(port, err => {
    if (err) throw new Error(`Error en el servidor: ${err}`)

    console.log(`Server running on  ${port}.`)
})


