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
            // console.log("Datos del tipo de vehículo incorrectos. No se puede calcular el monto.");
            return
            break;
    }

    sillaParaBebe == true ? resultado = precioVehiculo * diasDeAlquiler + 1200 : resultado = precioVehiculo * diasDeAlquiler;

    if(sillaParaBebe == true){
        // console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando
        //     los ${diasDeAlquiler} días utilizados y la silla para niños, el monto total a pagar es de ${resultado}`)
    }else{
        // console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando
        //     los ${diasDeAlquiler} días utilizados, el monto total a pagar es de ${resultado}`)
    }
}

rentalCar("Compacto", 7, false);
rentalCar("Compacto", 7, true);
rentalCar("Mediano", 7, true);
rentalCar("Camioneta", 12, true);
rentalCar("ejemplo de parametro invalido", 12, true);