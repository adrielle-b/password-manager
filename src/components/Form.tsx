import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
      background: '#0d1b2a',
      color: '#f77f00',
    });
  };

  return (
    showForm ? (
      <section
        className="flex p-2 justify-evenly mx-48 pt-6 text-white border-2
        border-orange-600 rounded-lg"
      >
        <form className="p-5 flex flex-col items-center text-white gap-2">
          <label htmlFor="name" className="flex flex-col gap-1">
            Nome do serviço:
            <input
              type="text"
              id="name"
              value={ inputs.name }
              onChange={ (e) => handleChange(e) }
              className="bg-gray-950 mb-2 border-b-2 border-slate-500 p-1"
            />
          </label>
          <label htmlFor="login" className="flex flex-col pb-1">
            Login:
            <input
              type="text"
              id="login"
              value={ inputs.login }
              onChange={ (e) => handleChange(e) }
              className="bg-gray-950 mb-2 border-b-2 border-slate-500 p-1"
            />
          </label>
          <label htmlFor="senha" className="flex flex-col pb-1 relative">
            Senha:
            <input
              type={ showPassword ? 'text' : 'password' }
              id="senha"
              value={ inputs.senha }
              onChange={ (e) => handleChange(e) }
              className="bg-gray-950 mb-2 border-b-2 border-slate-500 p-1"
            />
            <button
              type="button"
              data-testid="show-hide-form-password"
              onClick={ () => setShowPassword(!showPassword) }
              className="ml-2 absolute right-3 bottom-6"
            >
              { showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </label>
          <label htmlFor="url" className="flex flex-col pb-1">
            URL:
            <input
              type="text"
              id="url"
              onChange={ (e) => handleChange(e) }
              className="bg-gray-950 mb-2 border-b-2 border-slate-500 p-1"
            />
          </label>
          <div className="flex">
            <button
              type="button"
              onClick={ () => setShowForm(false) }
              className="text-orange-600 bg-gray-950 border-2 border-orange-600 mb-8
            rounded-lg px-4 py-2 m-4 hover:bg-orange-600 hover:text-stone-200"
            >
              Cancelar
            </button>
            <button
              type="button"
              disabled={ !formIsValid() }
              onClick={ serviceAdd }
              className="text-orange-600 bg-gray-950 border-2 border-orange-600 rounded-lg
              mb-8 px-4 py-2 m-4 hover:bg-orange-600 hover:text-stone-200 cursor-pointer"
            >
              Cadastrar
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center gap-3">
          <p className={ `${displayValidation(/.{8,}/)}` }>Possuir 8 ou mais caracteres</p>
          <p className={ `${displayValidation(/^.{1,16}$/)}` }>Possuir até 16 caracteres</p>
          <p className={ `${displayValidation(/^(?=.*[a-zA-Z])(?=.*\d).+$/)}` }>Possuir letras e números</p>
          <p className={ `${displayValidation(/[@#$%^&+=!]/)}` }>Possuir algum caractere especial</p>
        </div>
      </section>
    ) : (
      <div className="flex justify-center">
        <button
          type="button"
          onClick={ () => setShowForm(true) }
          className="sm:w-1/4 text-orange-600 bg-gray-950 border-2 border-orange-600
        mb-8 rounded-lg px-4 py-2 m-4 hover:bg-orange-600 hover:text-stone-200"
        >
          Cadastrar nova senha
        </button>
      </div>
    )
  );
}

export default Form;
