function menuInicio() {

    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***ChefStaff. Profesionales del sector gastronómico***\n" + "Ingresa la opción :\n" + "1. Contratar Staff Gastronómico\n" + "2. Salir\n"));

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
        opcionMenu = parseInt(prompt("***Seleccione el tipo de Staff : ***\n" + "1. Cocinero\n" + "2. Ayudante de Cocina\n" +"3. Otro(Uso Futuro)\n" + "4. Salir"));

        validacion = isNaN(opcionMenu);

        if (!validacion) {
            if (opcionMenu < 1 || opcionMenu > 4) {
                validacion = true;
                console.error("Número no válido. Ingresa Valor entre 1 o 4");
            } else {
                consultaStaff(opcionMenu);
            }
        } else {
            console.error("Número no válido. Ingresa Valor entre 1 o 4");
        }
    } while (validacion);
}

function consultaStaff(op){
    switch(op){
        case 1:
            cocinero();
            break;
        case 2:
            ayudanteCocina();
            break;
        case 3:
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
    
    const arrayCocineros = ["Chef Profesional por $25.000 CLP/hora", "Chef Técnico por $20.000 CLP/hora", "Cocinero Amateur por $15.000 CLP/hora"];
    console.log(op);

    for (let i=0; i<arrayCocineros.length;i++){
        if(i==op-1){
            console.log("Contrataste \n"+arrayCocineros[i]);
        }
    }
}

function ayudanteCocina(){
    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***Ayudante Cocina de GastroStaff***\n"+" Selecciona la opción a contratar: ***\n" + "1. Ayudante Profesional\n" + "2. Ayudante técnico\n" + "3. Ayudante Amateur\n" + "4. Ninguno"));

        validacion = isNaN(opcionMenu);

        if (!validacion) {
            if (opcionMenu < 1 || opcionMenu > 4) {
                validacion = true;
                console.error("Número no válido. Ingresa Valor entre 1 o 4");
            } else {
                consultaAyudante(opcionMenu);
            }
        } else {
            console.error("Número no válido. Ingresa Valor entre 1 o 4");
        }
    } while (validacion);
}

function consultaAyudante(op){
    
    const arrayAyudantes = ["Ayudante Profesional por $15.000 CLP/hora", "Ayudante Técnico por $10.000 CLP/hora", "Ayudante Amateur por $8.000 CLP/hora"];
    console.log(op);

    for (let i=0; i<arrayAyudantes.length;i++){
        if(i==op-1){
            console.log("Contrataste \n"+arrayAyudantes[i]);
        }
    }
}

/*Inicio*/
menuInicio();

