import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

function Services() {
  const { services, setServices } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(true);

  const removeService = (index: number) => {
    const newListServices = services.filter((_, i) => i !== index);
    setServices(newListServices);
  };

  return (
    <section>
      {services.length === 0 ? (<p>Nenhuma senha cadastrada</p>) : (
        <>
          <label htmlFor="showPassword">
            Esconder senhas
            <input
              type="checkbox"
              id="showPassword"
              checked={ !showPassword }
              onChange={ () => setShowPassword(!showPassword) }
            />
          </label>
          {services.map((service, index) => (
            <div key={ service.name }>
              <a href={ service.url }>{ service.name }</a>
              <p>Login:</p>
              <p>{ service.login }</p>
              <p>Senha:</p>
              <p>{showPassword ? service.senha : '******' }</p>
              <button
                type="button"
                onClick={ () => removeService(index) }
              >
                Remover
              </button>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default Services;
