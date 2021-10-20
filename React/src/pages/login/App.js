import { Component } from 'react';
import './App.css';

class Login extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {

    }
  }

  render()
  {
    return(
      <main className="main-lg">
        <div className="dois-lg"></div>
        <div className="triangulo-lg"></div>

        <section className="login-lg">
          <div className="lg">

          <form className="form-lg">

            <h1 className="h1-lg">Login</h1>

            <input type="email" className="input-lg" placeholder="Email"/>
            <input type="password" className="input-lg" placeholder="Senha"/>
            <button type="submit" className="btn-lg">Login</button>
            
          </form>

          </div>

        <div className="cad-lg">

          <div className="linha-lg"></div>
          <p className="p-cad">Não tem uma conta? <i className="destacado-lg"><a>cadastre-se</a></i></p>
          
        </div>
        </section>


      </main>
    );
  }

}

export default Login;
