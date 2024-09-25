import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
  render() {
    return (<h1>{this.props.label}</h1>);
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p>
        {this.props.text}
      </p>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title label={this.props.title} />
        <Paragraph text={this.props.text} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main title="Olá Mundo" text="Bem-vindo ao React!" />,
  document.getElementById('react-app')
);
