import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import './index.css';

import Login from './pages/login/App';
import NotFound from './pages/Notfound/NotFound';
import Cadastro_CEP from './pages/cadastro/cadastro_cep/cep';
import Cadastro_CM from './pages/cadastro/cadastro_comercio/cadastro_cm';
import Cadastro_LJ from './pages/cadastro/cadastro_lj/cadastro_lj';
import Cadastro_User from './pages/cadastro/cadastro_user/cadastro_user';
import Home from './pages/home/home';
import Lista from './pages/lista/lista';
import Perfil_CM from './pages/perfil/perfil_cm/perfil_cm';
import Perfil_User from './pages/perfil/perfil_user/perfil_user';
import Solucao from './pages/solucao/solucao';


import reportWebVitals from './reportWebVitals';

const routing = (
  <Router> 
    <div>
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route path='/notfound' component={NotFound}/>
        <Route path='/login' component={Login}/>
        <Route path='/cadastroCEP' component={Cadastro_CEP}/>
        <Route path='/cadastroCM' component={Cadastro_CM}/>
        <Route path='/cadastroLJ' component={Cadastro_LJ}/>
        <Route path='/cadastroUser' component={Cadastro_User}/>
        <Route path='/Lista' component={Lista}/>
        <Route path='/PerfilCM' component={Perfil_CM}/>
        <Route path='/PerfilUser' component={Perfil_User}/>
        <Route path='/Solucao' component={Solucao}/>

        <Redirect to="NotFound"/>

      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
