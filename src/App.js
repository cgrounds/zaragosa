import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"activeClassName="active">home</Link>
          <Link to="/shop"activeClassName="active">shop</Link>
          <Link to="/studio"activeClassName="active">studio</Link>
           {this.props.children}
        </nav>
      </div>
    );
  }
}

export default App;
