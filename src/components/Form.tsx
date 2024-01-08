import React, { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    login: '',
    senha: '',
    url: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const formIsValid = () => {
    const { name, login, senha } = inputs;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const passwordCheck = passwordRegex.test(senha);

    const isValid = name.length > 0 && login.length > 0 && passwordCheck;
    return isValid;
  };

  return (
    showForm ? (
      <form>

        <label htmlFor="name">
          Nome do serviço
          <input
            type="text"
            id="name"
            value={ inputs.name }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            value={ inputs.login }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            type="password"
            id="senha"
            value={ inputs.senha }
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <label htmlFor="url">
          URL
          <input
            type="text"
            id="url"
            onChange={ (e) => handleChange(e) }
          />
        </label>

        <button type="button" disabled={ !formIsValid() }>Cadastrar</button>
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
