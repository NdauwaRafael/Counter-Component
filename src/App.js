import React, { Component } from 'react';
import './App.css';
import Button from './components/button'

class App extends Component {
  state = {
    counter: 0
  };
  increamentCounter = ()=>{
    this.setState((prevState)=>({
        counter: prevState.counter + 1
    }))
  };
  render() {
    return (
      <div className="App">
        <Button onCounterUpdate={this.increamentCounter}/>
      </div>
    );
  }
}

export default App;
