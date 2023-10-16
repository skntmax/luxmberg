import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
 import Home_Page_Banner from './../../../assets/Home Page Main Banner/Home Page Banner.jpg'  
 import Home_Page_Banner2 from './../../../assets/Home Page Main Banner/Home page BAanner 1.jpg'  
 import Home_Page_Banner3 from './../../../assets/Home Page Main Banner/Home page baner 2 .jpg'  
export default class Carasol extends Component {  


    constructor(props) {
         super(props)
          this.state ={
             image_style:{
                width: "100%",
                height: "100%",
                objectFit: "contain",
             }
          }
    }
    render() {  
        return (  
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={2000}>  
                    <img style={this.state.image_style} src={Home_Page_Banner} />  
                    <img   src={Home_Page_Banner2} />  
                    <img   src={Home_Page_Banner3} />  
            </Carousel>  
        );  
    }  
  }
  