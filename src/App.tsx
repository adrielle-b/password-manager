import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Services from './components/Services';
import ServiceProvider from './context/GlobalProvider';

function App() {
  return (
    <ServiceProvider>
      <div className="bg-gray-950 min-h-screen">
        <Header />
        <Form />
        <Services />
      </div>
    </ServiceProvider>
  );
}

export default App;
