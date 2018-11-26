/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

class Decreament extends Component {
    render(){
        return (
            <button onClick={this.props.onCounterDecreament}>-1</button>
        )
    }
}

export default Decreament;