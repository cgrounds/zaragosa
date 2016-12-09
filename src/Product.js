import React, { Component } from 'react';
import './Shops.css';


class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      mouseOver: false
    }
    this._displayInfo=this._displayInfo.bind(this)
    this._hideInfo=this._hideInfo.bind(this)
  }

  _displayInfo(e){
    this.setState({ mouseOver: true });
  }

  _hideInfo(e){
    this.setState({ mouseOver: false });
  }

  render(){
    let cssClass = "item-info"
    if (!this.state.mouseOver) {
      cssClass += ' hidden'
    }
    return(
        <div className="item" onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)}>
          <img className="image-container" role="presentation" src={this.props.image.url_170x135} />
          <div className={cssClass}><a href={this.props.item.url} target="_blank">
            <div className="item-title">{this.props.item.title}</div>
            <hr />
            {this.props.item.price}
            <br />
            {this.props.item.description}
          </a></div>
        </div>
    )
  }
}

export default Product;
