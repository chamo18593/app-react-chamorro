import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Layout from './components/Layout';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  const onAdd = () => {}
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo='Bienvenido a Happy Belly'/>
      <Layout>
        <Main
          saludo="Bienvenido!"
          edad={1}
          datos={{nombre: 'Happy Belly'}}
        />
        <h3>
          Consulta por otros productos!
        </h3>
        <Contador initial={1} stock={10} onAdd={onAdd}/>
      </Layout>
    </>
    );
  };
  

export default App;
