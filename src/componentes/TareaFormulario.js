import React, { useState } from "react";
import '../stylesheet/TareaFormulario.css'


function TareaFormulario(props) {

  const [input, setINput] = useState('');

  const manejarCambio = e => {

  }

  const manejarEnvio = e => {
    const tareaNueva = {
      id: '34545'
      texto: 
    }
  }

  return (
    <form className="tarea-formulario">
      <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;