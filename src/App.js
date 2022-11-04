import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Layout from './components/Layout';
import Contador from './components/Contador';

const App = () => {
  return (
    <>
      <Navbar/>
      
      <Cards/>
      <Layout>
        <Main
          saludo="Bienvenido!"
          edad={1}
          datos={{nombre: 'Happy Belly'}}
        />
        <h3>
          Consulta por otros productos!
        </h3>

        <Contador stock={10} />

      </Layout>
    </>
    );
  };
  

export default App;
