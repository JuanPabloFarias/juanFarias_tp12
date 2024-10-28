fastfood(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
prompt

calculoTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precioTotal = 0;
    jamon == true ? precioTotal+= 30;
    queso == true ? precioTotal+= 25;
    salsaDeTomate == true ? precioTotal+= 5;
    mayonesa == true ? precioTotal+= 5;
    mostaza == true ? precioTotal+= 5;
    tomate == true ? precioTotal+= 15;
    lechuga == true ? precioTotal+= 10;
    cebolla == true ? precioTotal+= 10;

    return precioTotal;
}

console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando
        //     los ${diasDeAlquiler} días utilizados, el monto total a pagar es de ${resultado}`)
}