const Contenedor = require("./contenedor");
 
 
const contenedor = new Contenedor ('./productos.txt')

contenedor.save({ nombre:'Producto 1', precio:100, categoria:'Remeras'})
//  contenedor.getById(1)
//  contenedor.getAll()
// contenedor.delete(3)
// contenedor.deleteAll()