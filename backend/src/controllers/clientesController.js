const clientes = require('../data/clientes');

exports.obtenerClientes = (req, res) => {
  res.json(clientes);
};

exports.crearCliente = (req, res) => {

  const nuevoCliente = {
    id: clientes.length + 1,
    ...req.body
  };

  clientes.push(nuevoCliente);

  res.status(201).json(nuevoCliente);
};

exports.eliminarCliente = (req, res) => {

  const id = parseInt(req.params.id);

  const index = clientes.findIndex(c => c.id === id);

  if(index !== -1){
    clientes.splice(index, 1);
    res.json({
      mensaje: "Cliente eliminado"
    });
  } else {
    res.status(404).json({
      mensaje: "Cliente no encontrado"
    });
  }
};