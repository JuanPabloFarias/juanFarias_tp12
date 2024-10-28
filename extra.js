function upperConverter(stringEnMinuscula){
    return stringEnMinuscula.toUpperCase();
}

function dataType(parametro){
    return typeof(parametro);
}

function dogAge(edad){
    return edad *= 7;
}

function hourPrice(salarioMensual, diasTrabajados, horasDia){
    return (salarioMensual / diasTrabajados) / horasDia;
}

console.log(upperConverter("minusculas"));
console.log(dataType([2, 4, 7]))
console.log(dogAge(4));
console.log(hourPrice(500000, 24, 8));

module.exports = {upperConverter, dataType, dogAge, hourPrice}