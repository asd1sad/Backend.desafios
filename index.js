
class Usuario  {
    constructor (nombre, apellido ,libros, mascotas) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.libros   = libros;
        this.mascotas = mascotas;  
    }

    getFullName () {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota (nuevaMascota) {
      this.mascotas.push(nuevaMascota)
        console.log(this.mascotas)
    }

    countMascotas () {
        console.log(this.mascotas.length)
    }

    addBook (nombre,autor) {
     this.libros.push({nombre,autor})
        console.log(this.libros)
    }

    getBookNames () {
        const mapeo = this.libros.map(item => item.nombre)
        console.log(   mapeo  )
    }
}

const usuario = new Usuario (
    'M',
    'Robi',
    [ {nombre:'Lotr' , autor:'J. R. R. Tolkien'} , {nombre:'Lotf' , autor:'William Golding'} ],
    ['Loco','Juana'])
 
console.log(usuario.getBookNames())



