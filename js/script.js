function menuInicio() {

    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***Bienvenido a los Servicios de ChefStaff. La plataforma con los mejores profesionales del sector gastronómico***\n" + "Ingresa la opción que deseas consultar:\n" + "1. Consultar Categorías de Staff\n" + "2. Salir\n"));

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

function categorias() {
    //Arreglo con categorías de profesionales
    const arrayStaff = ["Cocinero", "Ayudante de Cocina", "Steward", "Bartender", "Mesero", "Otro"];

    let validacion;
    let opcionMenu;

    do {
        opcionMenu = parseInt(prompt("***Seleccione el tipo de Staff a Contratar: ***\n" + "1. Cocinero\n" + "2. Ayudante de Cocina\n" + "3. Steward\n" + "4. Bartender\n" + "5. Mesero\n" + "6. Otro\n" + "7. Salir"));

        validacion = isNaN(opcionMenu);

        if (!validacion) {
            if (opcionMenu < 1 || opcionMenu > 7) {
                validacion = true;
                console.error("Número no válido. Ingresa Valor entre 1 o 7");
            } else {
                consultaStaff(op);
            }
        } else {
            console.error("Número no válido. Ingresa Valor entre 1 o 7");
        }
    } while (validacion);
}

/*Inicio*/
menuInicio();

