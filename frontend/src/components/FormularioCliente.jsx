import { useState } from "react";

import api from "../services/api";

function FormularioCliente({ actualizarClientes }) {

  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");

  const crearCliente = async (e) => {

    e.preventDefault();

    await api.post("/clientes", {
      nombre,
      empresa,
      correo
    });

    setNombre("");
    setEmpresa("");
    setCorreo("");

    actualizarClientes();
  };

  return (

    <form onSubmit={crearCliente}>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button type="submit">
        Crear Cliente
      </button>

    </form>
  );
}

export default FormularioCliente;