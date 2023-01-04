import React from 'react';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="Joao" email="joao@email.com" data={new Date(2023, 1, 3)}>
        Olá, tudo bem?
      </Comentario>  

      <Comentario nome="Maria" email="maria@email.com" data={new Date(2023, 1, 4)}>
        Olá, tudo bem sim
      </Comentario>
    </div>
  );
}

export default App;
