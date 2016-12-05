import React, { Component } from 'react';
import Clint from './Clint.js';
import Hattie from './Hattie.js';
import Raud from './Raud.js';
import {Link} from 'react-router';

class Shop extends Component {
  render(){
    return(
      <div>
        <Link to="/clint"activeClassName="active">clint</Link>
        <Link to="/hattie"activeClassName="active">hattie</Link>
        <Link to="/raud"activeClassName="active">raud</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Shop;
