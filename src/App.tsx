import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Services from './components/Services';
import ServiceProvider from './context/GlobalProvider';

function App() {
  return (
    <ServiceProvider>
      <main className="bg-gray-950 h-screen">
        <Header />
        <Form />
        <Services />
      </main>
    </ServiceProvider>
  );
}

export default App;
