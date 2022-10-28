import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Navbar/>
      
      <Cards
      
      />
      <Layout>
        <Main
          saludo="Bienvenido a nuestra tienda!"
          edad={1}
          datos={{nombre: 'Happy Belly'}}
        />
        <h3>
          Consulta por otros productos!
        </h3>

        <button>Click!</button>

      </Layout>
    </>
  );
}

export default App;
