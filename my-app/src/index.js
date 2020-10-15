import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Stussy extends React.Component {

  render() {
    return (
        <h1>Island Snow!</h1>
    );
  }
}

ReactDOM.render(<Stussy />, document.getElementById('root'));