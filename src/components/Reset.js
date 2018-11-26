/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

class Reset extends Component {
    render(){
        return (
            <button onClick={this.props.onResetCounter}>
                Reset
            </button>
        )
    }
}