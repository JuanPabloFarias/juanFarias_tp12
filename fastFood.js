const prompt = require("prompt-sync")({ sigint: true });

function calculoTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precioTotal = 0;
    jamon == true ? precioTotal+= 30 : precioTotal+= 0;
    queso == true ? precioTotal+= 25 : precioTotal+= 0;
    salsaTomate == true ? precioTotal+= 5 : precioTotal+= 0;
    mayonesa == true ? precioTotal+= 5 : precioTotal+= 0;
    mostaza == true ? precioTotal+= 5 : precioTotal+= 0;
    tomate == true ? precioTotal+= 15 : precioTotal+= 0;
    lechuga == true ? precioTotal+= 10 : precioTotal+= 0;
    cebolla == true ? precioTotal+= 10 : precioTotal+= 0;

    if(tipoHamburguesa === "carne"){
        precioTotal += 1800;
    } else if(tipoHamburguesa === "pollo"){
        precioTotal += 1500;
    } else if(tipoHamburguesa === "vegetariana"){
        precioTotal += 1200;
    } else{
        console.log("Error. Tipo de Hamburguesa no especificada.")
    }
    return precioTotal;
}

function fastFood(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");

let precio = calculoTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla)

return `Estimado ${nombreUsuario} ${apellidoUsuario}, el monto total a pagar es de: $${precio}`
}

// console.log(fastFood("carne",true, false, false, true, true, false, true, false));