import React, { Component } from 'react';
import './App.css';
import Keys from './components/Keys';
import Display from './components/Display';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">

            <Title />

          <div className="App-display">
            <Display />
          </div>

            <Keys />

        </div>
      </div>
    );
  }
}

export default App;
