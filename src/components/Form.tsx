import React, { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);
  return (
    showForm ? (
      <form>

        <label htmlFor="name">
          Nome do serviço
          <input type="text" id="name" />
        </label>

        <label htmlFor="login">
          Login
          <input type="text" id="login" />
        </label>

        <label htmlFor="senha">
          Senha
          <input type="password" id="senha" />
        </label>

        <label htmlFor="url">
          URL
          <input type="text" id="url" />
        </label>

        <button type="button">Cadastrar</button>
        <button type="button" onClick={ () => setShowForm(false) }>Cancelar</button>

      </form>
    ) : (
      <button type="button" onClick={ () => setShowForm(true) }>
        Cadastrar nova senha
      </button>
    )
  );
}

export default Form;
