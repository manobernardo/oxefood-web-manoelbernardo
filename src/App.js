import { Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import FormCliente from './views/cliente/FormCliente';



function App() {
  return (
   
    <><FormCliente /><div style={{ marginTop: '6%' }}>
      <Segment vertical color='grey' size='tiny' textAlign='center'>
        &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
      </Segment>
    </div></>


    
  );
}

export default App;
