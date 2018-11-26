import React, {Component} from 'react';
import './App.css';
import Increament from './components/Increament'
import Decreament from './components/Decreament'
import Result from './components/Result';

class App extends Component {
    state = {
        counter: 0
    };
    increamentCounter = (increamentValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + increamentValue
        }))
    };
    decreamentCounter = (decreamentValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter - decreamentValue
        }))
    };

    render() {
        return (
            <div className="App">
                <h3>Counter</h3>
                <Increament increamentValue={1} onCounterUpdate={this.increamentCounter}/>
                <Increament increamentValue={2} onCounterUpdate={this.increamentCounter}/>
                <Increament increamentValue={5} onCounterUpdate={this.increamentCounter}/>
                <Increament increamentValue={10} onCounterUpdate={this.increamentCounter}/>
                <Decreament decreamentValue={1} onCounterDecreament={this.decreamentCounter}/>
                <Decreament decreamentValue={2} onCounterDecreament={this.decreamentCounter}/>
                <Decreament decreamentValue={5} onCounterDecreament={this.decreamentCounter}/>
                <Decreament decreamentValue={10} onCounterDecreament={this.decreamentCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}

export default App;
