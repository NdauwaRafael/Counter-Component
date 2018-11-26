import React, {Component} from 'react';
import './App.css';
import Increament from './components/Increament'
import Decreament from './components/Decreament'
import Result from './components/Result';

class App extends Component {
    state = {
        counter: 0
    };
    increamentCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    };
    decreamentCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }))
    };

    render() {
        return (
            <div className="App">
                <h3>Counter</h3>
                <Increament onCounterUpdate={this.increamentCounter}/>
                <Decreament onCounterDecreament={this.decreamentCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}

export default App;
