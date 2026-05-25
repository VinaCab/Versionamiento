function ClienteCard({ cliente, eliminarCliente }) {

  return (
    <div>

      <h3>{cliente.nombre}</h3>

      <p>{cliente.empresa}</p>

      <p>{cliente.correo}</p>

      <button onClick={() => eliminarCliente(cliente.id)}>
        Eliminar
      </button>

    </div>
  );
}

export default ClienteCard;