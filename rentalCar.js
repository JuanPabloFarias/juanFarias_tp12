function rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){
    let resultado = 0;
    let precioVehiculo = 0;

    switch (tipoDeVehiculo) {
        case "Compacto":
            precioVehiculo = 14000;
            break; 
        case "Mediano":
                precioVehiculo = 17000;
                break; 
        case "Camioneta":
                precioVehiculo = 28000;
                break;
        default:
            return "Datos del tipo de vehículo incorrectos. No se puede calcular el monto.";
            break;
    }

    sillaParaBebe == true ? resultado = precioVehiculo * diasDeAlquiler + 1200 : resultado = precioVehiculo * diasDeAlquiler;

    if(sillaParaBebe == true){
        return `Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los ${diasDeAlquiler} días utilizados y la silla para niños, el monto total a pagar es de ${resultado}`
    }else{
        return `Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de ${resultado}`
    }
}

// console.log(rentalCar("Compacto", 7, false));
// console.log(rentalCar("Compacto", 7, true));
// console.log(rentalCar("Mediano", 7, true));
// console.log(rentalCar("Camioneta", 12, true));
// console.log(rentalCar("ejemplo de parametro invalido", 12, true));