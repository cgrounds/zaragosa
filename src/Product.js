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
    this.setState({ mouseOver: false });
  }

  _hideInfo(e){
    this.setState({ mouseOver: true });
  }




  render(){
    let cssClass = "item-info"
    if (!this.state.mouseOver) {
      cssClass += ' hidden'
    }

    return(

        <div className="item">
          <img className="image-container" role="presentation" src={this.props.image.url_570xN
} onMouseOver={(e) => this._displayInfo(e)} onMouseLeave={(e) => this._hideInfo(e)}/>
          <div className={cssClass}>{this.props.item.title}</div>
        </div>

    )
  }
}

export default Product;
