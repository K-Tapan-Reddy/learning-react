import React, { Component } from "react";

class Timer extends Component {
  state = {
    count: 0,
  };
  // [count , setcount] : useState(0);
  handler() {
    if (this.state.count <= 100) {
      setInterval((count) => {
        count += 1;
      }, 1000);
    } else {
      this.state.count = 0;
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.state.handler}>start</button>
      </div>
    );
  }
}
export default Timer;
