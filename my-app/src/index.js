import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class Stussy extends React.Component {

  render() {
    return (
        <h1>Island Snow!</h1>
    );
  }
}

ReactDOM.render(<Stussy />, document.getElementById('root'));