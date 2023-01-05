import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@email.com',
        data: new Date(2023, 1, 3),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@email.com',
        data: new Date(2023, 1, 4),
        mensagem: 'Olá, tudo bem e você?'
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice} 
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}>
              {comentario.mensagem}
          </Comentario>  
        ))}

      </div>
    );
  }
}

export default App;
