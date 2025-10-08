let clientes = [
     { cedula: "1003669551", nombre: "James", edad: 20 },
     { cedula: "1003669635", nombre: "Ericka", edad: 28 },
     { cedula: "1001501277", nombre: "Moises", edad: 54 },
];
mostrarClientes = function () {
     let cmpTabla = document.getElementById("tablaClientes");
     let contenidoTabla = "<table><tr>" +
          "<th>CEDULA</th>" +
          "<th>NOMBRE</th>" +
          "<th>EDAD</th>" +
          "</tr>";
     let elementoCliente;
     for (let i = 0; i < clientes.length; i++) {
          elementoCliente = clientes[i];
          contenidoTabla += "<tr><td>" + elementoCliente.cedula + "</td>"
               + "<td>" + elementoCliente.nombre + "</td>"
               + "<td>" + elementoCliente.edad + "</td >"
               + "</tr>"
     }
     contenidoTabla += "</table>"
     cmpTabla.innerHTML = contenidoTabla;
}
buscarCliente = function (cedula) {
     let elementoCliente;
     let clienteEncontrado = null;
     for (i = 0; i < clientes.length; i++) {
          elementoCliente = clientes[i];
          if (elementoCliente.cedula == cedula) {
               clienteEncontrado = elementoCliente;
               break;
          }
     }

     return clienteEncontrado;
}
agregarCliente = function (cliente) {
     let resultado;
     resultado = buscarCliente(cliente.cedula);
     if (resultado == null) {
          clientes.push(cliente);
          alert("Cliente agregado");
          mostrarCliente();
     } else {
          alert("Ya existe el cliente con este numero de cedula " + cliente.cedula);
     }

}
crearCliente = function () {
     let valorCedula = recuperarTexto("txtCedula");
     let valorNombre = recuperarTexto("txtNombre");
     let valorEdad = recuperarInt("txtEdad");

     let nuevoCliente = {};
     nuevoCliente.cedula = valorCedula;
     nuevoCliente.nombre = valorNombre;
     nuevoCliente.edad = valorEdad;

     agregarCliente(nuevoCliente);

}
buscarCedula = function () {
     let valorCedula = recuperarTexto("txtCedula1");
     let cliente = buscarCliente(valorCedula);
     if (cliente == null) {
          alert("Cliente no encontrado");
     } else {
          mostrarTextoEnCaja("txtCedula",cliente.cedula);
          mostrarTextoEnCaja("txtNombre",cliente.nombre);
          mostrarTextoEnCaja("txtEdad",cliente.edad);

     }

}