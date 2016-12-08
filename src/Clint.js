import React, { Component } from 'react';
import axios from 'axios';
import './Shops.css';
import Product from './Product.js'

class Clint extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiInfo: [],
      images: []
    }
  }

componentDidMount(){
  this._getApiInformation()
}

_getApiInformation(){
  axios.get('https://zaragosa.herokuapp.com/HalusDesigns/hqluhr8ykdm8irqfjfh9rw8c', {
  })
  .then((response) => {
    let apiInfo = response.data.results
    console.log({apiInfo});
    this.setState({
      apiInfo: apiInfo
    })
    this._getApiImages();
    console.log(apiInfo);
  })
  .catch(function (error) {
    console.log(error);
  });
}

_getApiImages(){
  var listingIds = [];
  this.state.apiInfo.map((item, i) => {
    return listingIds.push(item.listing_id)
  });

  for (var i=0; i< listingIds.length; i++){
    axios.get(`https://zaragosa.herokuapp.com/images/${listingIds[i]}/hqluhr8ykdm8irqfjfh9rw8c`, {
    })
    .then((response) => {
      let images = response.data.results
      for (var i=0; i< images.length; i++){
        this.state.images.push(images[i]);
      }
      this.setState({
        images: this.state.images
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  console.log("images state:", this.state.images);
}

  render(){

    return(
      <div className="items">
        <div className="images-div">
          {this.state.images.map((image, i) => {
            return <Product key={i} item={this.state.apiInfo[i]} image={image.url_570xN} />

              })}
        </div>
      </div>
    )
  }
}

// <div className="items">
//   <div className="items-div">
//     {this.state.apiInfo.map((item, i) => {
//       return <div key={i} className="item-info">
//         {item.title} ${item.price}</div>
//         })}
//   </div>
//   <div className="images-div">
//     {this.state.images.map((image, i) => {
//         return <img key={i} className="item-images"
//         src={image.url_570xN}></img>
//         })}
//   </div>
// </div>

export default Clint;
