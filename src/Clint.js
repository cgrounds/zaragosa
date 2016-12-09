import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Shops.css';
import Product from './Product.js';

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

        <div className="images-div">
          {_.map(this.state.images, (image, i) => {
            let listingId =image.listing_id;
            let item = _.find(this.state.apiInfo, { listing_id : listingId })
            return <Product key={i} item={item} image={image} />
              })}
      </div>
    )
  }
}


export default Clint;
