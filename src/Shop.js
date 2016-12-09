import React, { Component } from 'react';
import './Shops.css';
import {Link} from 'react-router';

class Shop extends Component {
  render(){
    return(
      <div className="personal-shops">
        <Link to="shop/clint" className="name-links">clint</Link>
        <Link to="shop/hattie" className="name-links">hattie</Link>
        <Link to="shop/raud" className="name-links">raud</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Shop;
