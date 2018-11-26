/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

class Decreament extends Component {
    handleClick = () => {
        this.props.onCounterDecreament(this.props.decreamentValue)
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                -{this.props.decreamentValue}
            </button>
        )
    }
}

export default Decreament;