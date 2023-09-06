import { Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';

import Rotas from './Rotas';




function App() {
  return (
   
    <><Rotas />
      <Segment vertical color='grey' size='tiny' textAlign='center'>
        &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
      </Segment>
    </>


    
  );
}

export default App;
