 
class Constructor {

    constructor(array) {
        this.array = array;
    }

    nombres() {
            const resultado =  this.array.map( (element) => element.nombre );
                const resultadoOrdenado =  resultado.join(' , ') 
                    console.log(resultadoOrdenado)
    }

    precioTotal() {
        let suma = 0;
        const resultado =  this.array.map( (element) => element.precio );
            for(let i= 0 ; i < resultado.length ; i++) {
                suma += resultado[i]
            }
                console.log(`Precio total $${suma.toFixed(2)}`)    
    }

    precioPromedio()  {
        let suma = 0;
        const resultado =  this.array.map( (element) => element.precio );
            for(let i= 0 ; i < resultado.length ; i++) {
                suma += resultado[i]
            }
            suma = suma.toFixed(2)
      
            
            let promedio = suma / this.array.length  
                console.log(`Promedio $${promedio.toFixed(2)}`)    
    }

    menorPrecio(){
        const resultado =  this.array.map( (element) => element.precio );
            let minimo = Math.min(...resultado);
                console.log(`Menor precio $${minimo}`)
    }

    maxPrecio(){
        const resultado =  this.array.map( (element) => element.precio );
            let max = Math.max(...resultado);
                console.log(`Max precio $${max}`)
    }

    resumenDeCompra() {
        
    }
}

const productos =  [
                    {id:1,  nombre:'Escuadra',        precio:323.45},
                    {id:2,  nombre:'Calculadora',     precio:234.56},
                    {id:3,  nombre:'Globo Terráqueo', precio:45.67 },
                    {id:4,  nombre:'Paleta Pintura',  precio:456.78},
                    {id:5,  nombre:'Reloj',           precio:67.89} ,
                    {id:6,  nombre:'Agenda',          precio:78.90} 
                    ]

const nuevaClase = new Constructor (productos)

console.log()
console.log('Datos pedidos:')
console.log()
 

const ticket = () => {     
    nuevaClase.nombres()
    nuevaClase.precioTotal()
    nuevaClase.precioPromedio()
    nuevaClase.menorPrecio()
    nuevaClase.maxPrecio()
    nuevaClase.maxPrecio()
  
}
ticket()

