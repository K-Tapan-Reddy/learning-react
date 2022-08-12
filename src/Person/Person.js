import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div className="person">
        <p onClick={this.props.clicked}>
          hi i m {this.props.Name} and i m {this.props.Age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.Name}
        ></input>
      </div>
    );
  }
}

export default Person;
