import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 ts">
        <h1>Je m'appelle Mustafa!</h1>
        <p>{this.props.greetings}</p>
      </div>
    );
  }
}

export default Hello;
