import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
          <Link className="main-links" to="/"activeClassName="active">home</Link>
          <Link className="main-links" to="/shop"activeClassName="active">shop</Link>
          <Link className="main-links" to="/studio"activeClassName="active">studio</Link>
           {this.props.children}
      </div>
    );
  }
}

export default App;
