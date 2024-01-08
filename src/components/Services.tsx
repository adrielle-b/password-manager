import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

function Services() {
  const { services } = useContext(GlobalContext);
  return (
    <section>
      {services.length === 0 ? (<p>Nenhuma senha cadastrada</p>) : (
        <>
          {services.map((service) => (
            <div key={ service.name }>
              <a href={ service.url }>{ service.name }</a>
              <p>Login:</p>
              <p>{ service.login }</p>
              <p>Senha:</p>
              <p>{ service.senha }</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default Services;
