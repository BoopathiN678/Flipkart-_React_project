import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeBrand = () => {
    this.setState({color: "BMW"});
  }
  changeModel = () => {
    this.setState({color: "M3"});
  }
  changeColor = () => {
    this.setState({color: "WHITE"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeBrand}
        >Change Brand</button>
        <button
          type="button"
          onClick={this.changeModel}
        >Change Model</button>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
export default Car;