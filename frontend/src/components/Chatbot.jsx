import { useState } from "react";

import api from "../services/api";

function Chatbot() {

  const [mensaje, setMensaje] = useState("");

  const [respuesta, setRespuesta] = useState("");

  const enviarMensaje = async () => {

    const res = await api.post("/chatbot", {
      mensaje
    });

    setRespuesta(res.data.respuesta);
  };

  return (

    <div>

      <h2>Chatbot Inteligente</h2>

      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button onClick={enviarMensaje}>
        Enviar
      </button>

      <p>{respuesta}</p>

    </div>
  );
}

export default Chatbot;