import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { GlobalContext } from '../context/GlobalProvider';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    login: '',
    senha: '',
    url: '',
  });
  const { services, setServices } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);

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

  const displayValidation = (regex: RegExp) => {
    return regex.test(inputs.senha)
      ? 'valid-password-check'
      : 'invalid-password-check';
  };

  const serviceAdd = () => {
    const { name, login, senha, url } = inputs;
    const newService = { name, login, senha, url };
    setServices([...services, newService]);
    setShowForm(false);
    setInputs({ name: '', login: '', senha: '', url: '' });
    Swal.fire({
      icon: 'success',
      text: 'Serviço cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    showForm ? (
      <form className="bg-stone-200 flex-col justify-items-center">
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
            type={ showPassword ? 'text' : 'password' }
            id="senha"
            value={ inputs.senha }
            onChange={ (e) => handleChange(e) }
          />
          <button
            type="button"
            data-testid="show-hide-form-password"
            onClick={ () => setShowPassword(!showPassword) }
          >
            Exibir
          </button>
        </label>
        <label htmlFor="url">
          URL
          <input
            type="text"
            id="url"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <button
          type="button"
          disabled={ !formIsValid() }
          onClick={ serviceAdd }
        >
          Cadastrar
        </button>
        <button type="button" onClick={ () => setShowForm(false) }>Cancelar</button>
        <div>
          <p className={ `${displayValidation(/.{8,}/)}` }>Possuir 8 ou mais caracteres</p>
          <p className={ `${displayValidation(/^.{0,16}$/)}` }>Possuir até 16 caracteres</p>
          <p className={ `${displayValidation(/^(?=.*[a-zA-Z])(?=.*\d).+$/)}` }>Possuir letras e números</p>
          <p className={ `${displayValidation(/[@#$%^&+=!]/)}` }>Possuir algum caractere especial</p>
        </div>
      </form>
    ) : (
      <div
        className="flex justify-center items-center"
      >
        <button
          type="button"
          onClick={ () => setShowForm(true) }
          className="sm:w-1/4
        text-orange-600
        bg-gray-950
        border-2
        border-orange-600
        rounded-lg px-4 py-2 m-4 hover:bg-orange-600 hover:text-stone-200"
        >
          Cadastrar nova senha
        </button>
      </div>
    )
  );
}

export default Form;
