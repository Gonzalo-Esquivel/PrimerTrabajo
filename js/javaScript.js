alert("Bienvenido a LA MORADA")
alert("Profe por favor presione F12. Muchas gracias")

let persona = ""
let password = ""
let login = false

while (login === false) {
    persona = prompt("Ingresa tu nombre:")
    password = prompt("Ingresa tu contraseña:")
    if (persona === "gonzalo" && password === "1422") {
        console.log("Bienvenido nuevamente", persona)
        login = true
    } else {
        alert("Estu usuario no esta registrado.")
    }
}

alert("Preparemos tu experiencia")

let diasCantidad = parseInt(prompt("Cuantos dias quieres quedarte?"))
console.log("Dias/Cantidad:", diasCantidad)
let solo = (prompt("Vienes solo?"))
console.log("Solo:", solo)
let pareja = (prompt("Vienes con tu pareja?"))
console.log("Pareja:", pareja)
let niños = (prompt("Vienes con niños?"))
console.log("Niños:", niños)


let infoCliente = (diasCantidad + solo + pareja + niños )

console.log("Que disfrute su estadia", infoCliente)


alert("El monto a pagar es $8.000")

    function metodoPago() {
        alert("Elija su metodo de pago");
        let tarjeta;
        do {
            tarjeta = prompt("Elija con la tarjeta: \n1)Visa 3 cuotas sin interés \n2)MasterCard 2 cuotas sin interés \n3)American 1 cuota sin interés \n4)Cabal 6 cuotas sin interés");
        }
        while (tarjeta != 1 && tarjeta != 2 && tarjeta != 3 && tarjeta != 4);
        switch (tarjeta) {
            case "1":
                return "Visa";
            case "2":
                return "MasterCard";
            case "3":
                return "American";
            case "4":
                return "Cabal";
        }
    }

    function validarCuotas(tarjeta) {
        if (tarjeta === "Visa") {
            return 3;
        } else if (tarjeta === "MasterCard") {
            return 2;
        } else if (tarjeta === "American") {
            return 1;
        } else {
            return 6;
        }
    }


    let tarjetaSeleccionada = metodoPago()
    let cuotas = validarCuotas(tarjetaSeleccionada)
    cobrar(tarjetaSeleccionada, cuotas)
    let monto = false

    function cobrar(tarjeta, cuotas) {
        alert("Usted pagará con: " + tarjeta.toUpperCase() + "\nEn: " + cuotas +" cuota/s");
    }

    while (monto === false) {
        let abonar = prompt("Usted pagará: $");
        if (abonar === "8000") {
            alert("Le quedarán " + cuotas + " cuota/s de $ " + parseFloat((abonar / cuotas)));
            console.warn("Le quedarán " + cuotas + " cuota/s de $ " + parseFloat((abonar / cuotas)));
            monto = true
        } else {
            alert("El monto no coincide con los precios publicados");
        }
}
