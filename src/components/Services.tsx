import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

function Services() {
  const { services, setServices } = useContext(GlobalContext);

  const removeService = (index: number) => {
    const newListServices = services.filter((_, i) => i !== index);
    setServices(newListServices);
  };

  return (
    <section>
      {services.length === 0 ? (<p>Nenhuma senha cadastrada</p>) : (
        <>
          {services.map((service, index) => (
            <div key={ service.name }>
              <a href={ service.url }>{ service.name }</a>
              <p>Login:</p>
              <p>{ service.login }</p>
              <p>Senha:</p>
              <p>{ service.senha }</p>
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
