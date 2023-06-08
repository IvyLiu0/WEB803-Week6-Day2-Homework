import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
    state = {count:0}

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });
        this.props.dispatch({type:'DECREMENT'});
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    {/* <span>{this.state.count}</span> */}
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);