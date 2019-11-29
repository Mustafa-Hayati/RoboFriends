import React, { Component } from "react";

import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import { robots } from "./robots";

class App extends Component {
  state = {
    robots,
    searchValue: ""
  };

  onSearchChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchValue)
    );

    return (
      <div className="tc">
        <Header searchChange={this.onSearchChange} />
        <Cards robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
