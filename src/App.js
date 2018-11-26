import React, { Component } from 'react';
import './App.css';
import Increament from './components/Increament'
import Result from './components/Result';
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
        <Increament onCounterUpdate={this.increamentCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
