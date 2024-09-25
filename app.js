import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <h1>Olá Mundo</h1>
      <Button label="Clique Aqui" onClick={handleClick} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('react-app'));
