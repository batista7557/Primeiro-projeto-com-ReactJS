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
        nome: 'Pedro',
        email: 'pedro@email.com',
        data: new Date(2023, 1, 4),
        mensagem: 'Olá, tudo bem e você?'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault()
    const novoComentario = { ...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: ''}
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value} })
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
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
              {comentario.mensagem}
          </Comentario>  
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar comentário</h2>
          <div>
            <input 
              type="text" 
              name='nome' 
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder='Digite seu nome'/>
          </div>
          <div>
            <input 
              type="email" 
              name='email' 
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder='Digite seu email'/>
          </div>
          <div>
            <textarea 
              name='mensagem' 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao} 
              required
              rows='4'></textarea>
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>    
      </div>
    );
  }
}

export default App;
