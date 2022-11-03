console.log("JS OK");

let nombre="";
let apellido="";
let email="";
let cantidad=0;
let categoria=0;
let botonResultado = document.getElementById("botonResultado");
let botonBorrar = document.getElementById("borrarCalculo");
let precioFinal;
let precioInter;
let campoPrecioFinal = document.getElementById("precioFinal");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function campoNombre() {
   nombre = document.getElementById("nombre").value;
   console.log(nombre);
}

function campoApellido() {
    apellido = document.getElementById("apellido").value;
    console.log(apellido);
 }

 function campoEmail() {
    email = document.getElementById("emailcompra").value;
    console.log(email);
 }

 function campoCantidad() {
    cantidad = document.getElementById("cantidad").value;
    console.log(cantidad);
 }

 function campoCategoria() {
    categoria = document.getElementById("categoria").value;
    console.log(categoria);
    return categoria;
 }

 function precioIntermedio () {
    if (cantidad > 0) {
   precioInter = cantidad * 200;
   console.log(precioInter);
    } else {
        precioInter = 0;
    };
 };

 function precioDefinitivo() {
    if (categoria == 1) {
        precioFinal = precioInter;
        console.log(precioFinal);
    } else if (categoria == 2) {
        precioFinal = 0.8 * precioInter;
        console.log(precioFinal);
    }  else if (categoria == 3) {
        precioFinal = 0.5 * precioInter;
        console.log(precioFinal);
    }  else if (categoria == 4) {
        precioFinal = 0.2 * precioInter;
        console.log(precioFinal);
    } else {
        console.log("eroooor");
             };
    }

    function mostrarPrecio () {
        document.getElementById("precioFinal").placeholder = "Total a pagar: $ " + precioFinal
    };

    function errorNombre () {
        if (nombre.length < 3 ) {
            document.getElementById("nombre").style.border = "2px solid red";
        } else {
            document.getElementById("nombre").style.border = "1px solid #ced4da";
        };
    };
    
    function errorApellido () {
        if (apellido.length < 3 ) {
            document.getElementById("apellido").style.border = "2px solid red";
        } else {
            document.getElementById("apellido").style.border = "1px solid #ced4da";
        };
    };

    function errorEmail () {
        if (email.match(validRegex)) {
            document.getElementById("emailcompra").style.border = "1px solid #ced4da";
        } else {
            document.getElementById("emailcompra").style.border = "2px solid red";
        };
    };

    function errorCantidad () {
        if (cantidad > 0) {
            document.getElementById("cantidad").style.border = "1px solid #ced4da";
        } else {
            document.getElementById("cantidad").style.border = "2px solid red";
        };
    };

    function errorCategoria () {
        if (categoria != 0) {
            document.getElementById("categoria").style.border = "1px solid #ced4da";
        } else {
            document.getElementById("categoria").style.border = "2px solid red";
        };
    };

    function borrarDatos () {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("emailcompra").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("categoria").value = "0";
        document.getElementById("precioFinal").placeholder = "Total a pagar: $";
        precioFinal = 0;
        document.getElementById("nombre").style.border = "1px solid #ced4da";
        document.getElementById("apellido").style.border = "1px solid #ced4da";
        document.getElementById("emailcompra").style.border = "1px solid #ced4da";
        document.getElementById("cantidad").style.border = "1px solid #ced4da";
        document.getElementById("categoria").style.border = "1px solid #ced4da";

    };



botonResultado.addEventListener("click", campoNombre);
botonResultado.addEventListener("click", campoApellido);
botonResultado.addEventListener("click", campoEmail);
botonResultado.addEventListener("click", campoCantidad);
botonResultado.addEventListener("click", campoCategoria);
botonResultado.addEventListener("click", precioIntermedio);
botonResultado.addEventListener("click", precioDefinitivo)
botonResultado.addEventListener("click", mostrarPrecio);
botonResultado.addEventListener("click", errorNombre);
botonResultado.addEventListener("click", errorApellido);
botonResultado.addEventListener("click", errorEmail);
botonResultado.addEventListener("click", errorCantidad);
botonResultado.addEventListener("click", errorCategoria);

botonBorrar.addEventListener("click",borrarDatos);
