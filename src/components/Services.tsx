import React, { useContext, useState } from 'react';
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import { GlobalContext } from '../context/GlobalProvider';

function Services() {
  const { services, setServices } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(true);

  const removeService = (index: number) => {
    const newListServices = services.filter((_, i) => i !== index);
    setServices(newListServices);
  };

  return (
    <section className="text-white bg-gray-950 pb-10">
      {services.length === 0 ? (
        <p className="text-center text-xl text-slate-500">Nenhuma senha cadastrada</p>
      ) : (
        <>
          <label htmlFor="showPassword" className="flex justify-end mr-20 mt-8">
            <div className="flex items-center cursor-pointer py-1">
              Esconder senhas
              <button
                onClick={ () => setShowPassword(!showPassword) }
                className=" pl-3 text-2xl text-orange-500"
              >
                {showPassword ? <LiaToggleOffSolid /> : <LiaToggleOnSolid />}
              </button>
              <input
                type="checkbox"
                id="showPassword"
                checked={ !showPassword }
                onChange={ () => {} }
                style={ { display: 'none' } }
              />
            </div>
          </label>
          <div className="flex flex-wrap justify-evenly mt-8">
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
          </div>
        </>
      )}
    </section>
  );
}

export default Services;
