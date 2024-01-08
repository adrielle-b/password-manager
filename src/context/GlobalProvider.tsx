import { Dispatch, ReactElement, SetStateAction, createContext, useState } from 'react';

type ServiceType = {
  name: string;
  login: string;
  senha: string;
  url: string;
};

type GlobalContextType = {
  services: ServiceType[];
  setServices: Dispatch<SetStateAction<ServiceType[]>>;
};

type Props = {
  children: ReactElement;
};

const GlobalContext = createContext<GlobalContextType>({
  services: [],
  setServices: () => [],
});

function ServiceProvider({ children }: Props) {
  const [services, setServices] = useState<ServiceType[]>([]);

  return (
    <GlobalContext.Provider value={ { services, setServices } }>
      { children }
    </GlobalContext.Provider>
  );
}

export default ServiceProvider;
export { GlobalContext };
