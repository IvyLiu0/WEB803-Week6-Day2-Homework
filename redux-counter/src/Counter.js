import React from 'react';
import {connect} from 'react-redux';
import './App.css';

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    // this.setState({
    //     count: this.state.count + 1
    // });
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    // this.setState({
    //     count: this.state.count - 1
    // });
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div>
        <h2 className="counterTitle">Counter</h2>
        <div className="divCount">
          {/* <span>{this.state.count}</span> */}
          <span className="spanCount">{this.props.count}</span>
          <button className="buttonDec" onClick={this.decrement}>
            -
          </button>
          <button className="buttonInc" onClick={this.increment}>
            +
          </button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        count: state.count
    };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);