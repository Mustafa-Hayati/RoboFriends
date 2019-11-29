import React, { Component } from "react";

import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";

class App extends Component {
  state = {
    robots: [],
    searchValue: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(robots => this.setState({ robots }));
  }

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
        {/* <Cards robots={filteredRobots} /> */}
        {this.state.robots.length > 0 ? (
          <Cards robots={filteredRobots} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
