import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PaginaInicial from './paginas/paginaInicial/index.js'
import Contato from './paginas/Contato/index.js'
import Chat from './paginas/Chat/index.js'

import Nav from './componentes/Nav/index.js'
import './App.css';


function App() {
  return (
    
      <div>
      <Nav/>
        <Switch>
        <Route exact path='/' component={PaginaInicial} /> 
        <Route path='/contato' component={Contato} /> 
        <Route path='/chat' component={Chat} />      
        </Switch>         
    </div>
  );
}

export default App;
