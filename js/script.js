/*Declaración de Variables y Constantes*/

//Variable para el menu de opciones
let opcionMenu;
let validacion;



/*Declaracion de funciones*/
function categorias() {
    //Arreglo con categorías de profesionales
    const arrayStaff = ["1. Cocinero", "2. Ayudante de Cocina", "3. Stewrad", "4. Bartender", "5. Mesero, 6. Otro"];
    console.log(arrayStaff);
}

function menuInicio() {
    
    do {
        opcionMenu = parseInt(prompt("***Bienvenido a los Servicios de ChefStaff. La plataforma con los mejores profesionales del sector gastronómico***\n"+"Ingresa la opción que deseas consultar:\n" + "1. Consultar Categorías de Staff\n" + "2. Salir\n"));

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

    console.log(validacion);

}

/*Inicio*/
menuInicio();

