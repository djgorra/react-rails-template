/* jshint esversion:6 */
import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world!"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      text: "React is working!"
      }
    )
  }

    render(){
      return (
        <h1 onClick={this.handleClick}>{this.state.text}</h1>
      )
    }
  }


export default App;
