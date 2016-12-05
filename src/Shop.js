import React, { Component } from 'react';
import './Shop.css';
import {Link} from 'react-router';

class Shop extends Component {
  render(){
    return(
      <div className="personal-shops">
        <Link to="shop/clint"activeClassName="active">clint</Link>
        <Link to="shop/hattie"activeClassName="active">hattie</Link>
        <Link to="shop/raud"activeClassName="active">raud</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Shop;
