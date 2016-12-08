import React, { Component } from 'react';
import './Item.css';



class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      item: false
    }
    this._displayInfo=this._displayInfo.bind(this)
  }

  _displayInfo(e){
    e.preventDefault();
     if (this.props.item.listing_id===this.props.image.listing_id){
      console.log(this.props.item.price)
      return <div className="item-info">{this.props.item.title} ${this.props.item.price}</div>
   }
      this.setState({
       item: true
      })
    }

  render(){
    let cssClass='Item'
    if (this.state.item===true) {
      cssClass+='Item-show'
    }
    return(

        <img className="item-images" role="presentation" src={this.props.image.url_570xN} onMouseOver={(e) => this._displayInfo(e)}></img>
    )
  }
}

export default Product;
