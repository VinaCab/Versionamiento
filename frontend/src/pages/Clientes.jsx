import { useEffect, useState } from "react";

import api from "../services/api";

import ClienteCard from "../components/ClienteCard";

import FormularioCliente from "../components/FormularioCliente";

function Clientes() {

  const [clientes, setClientes] = useState([]);

  const obtenerClientes = async () => {

    const res = await api.get("/clientes");

    setClientes(res.data);
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  const eliminarCliente = async (id) => {

    await api.delete(`/clientes/${id}`);

    obtenerClientes();
  };

  return (

    <div>

      <h1>Clientes</h1>

      <FormularioCliente actualizarClientes={obtenerClientes} />

      {
        clientes.map(cliente => (
          <ClienteCard
            key={cliente.id}
            cliente={cliente}
            eliminarCliente={eliminarCliente}
          />
        ))
      }

    </div>
  );
}

export default Clientes;