function menuInicio() {

    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***ChefStaff. La plataforma con los mejores profesionales del sector gastronómico***\n" + "Ingresa la opción que deseas consultar:\n" + "1. Contratar Staff Gastronómico\n" + "2. Salir\n"));

        validacion = isNaN(opcionMenu);
        if (!validacion) {
            if (opcionMenu === 1) {
                categorias();
            } else if (opcionMenu === 2) {
                console.log("Gracias por preferir ChefStaff!! Vuelve pronto");
            } else {
                validacion = true;
                console.error("Número no válido. Ingresa 1 o 2");
            }
        } else {
            console.error("Número no válido. Ingresa 1 o 2");
        }
    } while (validacion);
}

function categorias() {
    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***Seleccione el tipo de Staff a Contratar: ***\n" + "1. Cocinero\n" + "2. Ayudante de Cocina(Uso Futuro)\n" + "3. Steward(Uso Futuro)\n" + "4. Bartender(Uso Futuro)\n" + "5. Mesero(Uso Futuro)\n" + "6. Otro(Uso Futuro)\n" + "7. Salir"));

        validacion = isNaN(opcionMenu);

        if (!validacion) {
            if (opcionMenu < 1 || opcionMenu > 7) {
                validacion = true;
                console.error("Número no válido. Ingresa Valor entre 1 o 7");
            } else {
                consultaStaff(opcionMenu);
            }
        } else {
            console.error("Número no válido. Ingresa Valor entre 1 o 7");
        }
    } while (validacion);
}

function consultaStaff(op){
    switch(op){
        case 1:
            cocinero();
            break;
        case 2:
            //ayudanteCocina();
            break;
        case 3:
            //steward();
            break;
        case 4:
            //bartender();
            break;
        case 5:
            //mesero();
            break;
        case 6:
            //otro();
            break
        default:
            console.log("Gracias por preferir ChefStaff!! Vuelve pronto");    
    }
}

function cocinero(){
    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***Cocinero de GastroStaff***\n"+" Selecciona la opción a contratar: ***\n" + "1. Chef Profesional\n" + "2. Chef técnico\n" + "3. Cocinero Amateur\n" + "4. Ninguno"));

        validacion = isNaN(opcionMenu);

        if (!validacion) {
            if (opcionMenu < 1 || opcionMenu > 4) {
                validacion = true;
                console.error("Número no válido. Ingresa Valor entre 1 o 4");
            } else {
                consultaCocineros(opcionMenu);
            }
        } else {
            console.error("Número no válido. Ingresa Valor entre 1 o 4");
        }
    } while (validacion);
}

function consultaCocineros(op){
    const arrayCocineros = ["Chef Profesional\n"+"$25.000 CLP/hora", "Chef Técnico\n"+"$20.000 CLP/hora", "Cocinero Amateur"+"$15.000 CLP/hora"];
    console.log(op);

    for (let i=0; i<arrayCocineros.length;i++){
        if(i==op-1){
            console.log("Contrataste \n"+arrayCocineros[i]);
        }
    }
}
/*Inicio*/
menuInicio();

