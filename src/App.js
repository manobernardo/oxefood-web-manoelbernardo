import Rotas from './Rotas';
import { Segment } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './App.css';






function App() {
  return (
    <><div className="App"></div><ToastContainer /><><Rotas />
      <Segment vertical color='grey' size='tiny' textAlign='center'>
        &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
      </Segment>
    </></>



  );
}

export default App;
