import { Component } from 'react';
import './cadastro_user.css'
import MaskedInput from 'react-maskedinput';


class User extends Component
{
  constructor(props)
  {
    super(props);
    
    this.state = {
      celular : '',
    }
  }

  alterarStates = (state) => {
    this.setState({ [state.target.name] : state.target.value })

    console.log(this.state.celular)

  }
  

  render()
  {
    return(
      <main className="main-cdu">
        <div className="dois-cdu"></div>
        <div className="triangulo-cdu"></div>

        <section className="sec-cdu">
          <div className="ctn-cdu">
            <form className="form-cdu">

              <h1 className="h1-cdu">Cadastro do usuário</h1>

              <div className="inputs-cdu">
                <input type="text" placeholder="Nome" className="inp-cdu"/>
                <input type="text" placeholder="Sobrenome" className="inp-cdu"/>
                <MaskedInput mask="(11)11111-1111" name="celular" value={this.state.celular} onChange={this.alterarStates} placeholder="Celular" className="inp-cdu"/>
                <MaskedInput mask="11.111.111-1" placeholder="RG" className="inp-cdu"/>
                <input type="email" placeholder="Email" className="inp-cdu"/>
                <input type="password" placeholder="Senha" className="inp-cdu"/>
              </div>

              <button className="btn-cdu" type="submit">Cadastrar</button>
            </form>

          </div>

        </section>
      </main>
    );
  }

}

export default User;