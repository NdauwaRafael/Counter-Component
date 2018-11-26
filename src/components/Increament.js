/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

class Increament extends Component {
    handleClick = () => {
        this.props.onCounterUpdate(this.props.increamentValue)
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.increamentValue}
            </button>
        );
    }
}

export default Increament;