function responderMensaje(mensaje) {

  mensaje = mensaje.toLowerCase();

  if(mensaje.includes("hola")){
    return "Hola, bienvenido al CRM inteligente.";
  }

  if(mensaje.includes("clientes")){
    return "Puedes consultar los clientes en el módulo clientes.";
  }

  if(mensaje.includes("ayuda")){
    return "Estoy aquí para ayudarte.";
  }

  return "No entendí tu mensaje.";
}

module.exports = responderMensaje;