let milei = 0;
let massa = 0;
let larreta = 0;
let blanco = 0;
let pin = 1234;


function votacion(){
    salir = false;
    let opcion = prompt("Elija candidato a Presidente: \n1 - Milei \n2 - Massa \n3 - Larreta \n4 -Voto en blanco ");
    while (salir != true){
        switch (opcion){
            case "1":
                milei= milei+1;
                salir= true;
                break;
            case "2":
                massa= massa+1;
                salir= true;
                break;
            case "3":
                larreta= larreta+1;
                salir= true;
                break;
            case "4":
                blanco= blanco+1;
                salir= true;
                break;
            default:
                alert("Opcion no valida");
                opcion = prompt("Elija candidato a Presidente: \n1 - Milei \n2 - Massa \n3 - Larreta \n4 -Voto en blanco ");
                break;
    }
}
}

function resultados(){
    let ingresoPIN = prompt("Solo los administradores pueden ver los resultados. Ingrese el codigo de acceso:");
    if (ingresoPIN == pin){
        alert("Votos a Milei: " + milei + "\n Votos a Massa: " + massa + "\nVotos a Larreta: " + larreta + "\nVotos en Blanco: " + blanco);
    } else {
        alert("PIN Incorrecto");
    }

}

alert("Bienvenido al Sistema de Votacion")
    let opcion = prompt("Elija una opcion: \n1 - Votar. \n2 - Ver Resultados. \n3 - Salir.");
    while (opcion !="3"){
        switch (opcion){
            case "1":
                votacion();
                alert("Su voto se ha registrado, gracias por participar");
                break;
            case "2":
                resultados();
                break;
            case "3":
                alert("Gracias por utilizar nuestro sistema");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        opcion = prompt("Elija una opcion: \n1 - Votar. \n2 - Ver Resultados. \n3 - Salir.");
    }
