/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, { Component } from 'react';

class Increament extends Component {
        render(){
            return (
                <button onClick={this.props.onCounterUpdate}>
                    +1
                </button>
            );
        }
}

export default Increament;