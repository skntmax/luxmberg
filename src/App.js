import React, { useEffect } from 'react';
import './App.css';
import { AiOutlineSearch } from 'react-icons/ai'
import Image from './assets/homeBanner.jpg'
import worldMap from './assets/map.png'
import Image1 from './assets/Products School.png'
import Image2 from './assets/Products Art.png'
import Image3 from './assets/Products Offc.png'
import Image4 from './assets/World Map.png'
import Image5 from './assets/Luxor Journey.jpg'
import Carasol from './Components/header/Carasol/Carasoul';
import ArtGallery from './assets/images/Art Gallery.jpg'
import ImageContainer from './Components/ImageContainer';
import I1 from './assets/images/Look Book 1.jpg'
import I2 from './assets/images/Look Book 2.jpg'
import I3 from './assets/images/Look Book 3.jpg'

function App() {  

  useEffect(()=>{
     document.getElementsByClassName(
      'Art_gallery_button'
     )[0].innerHTML="Art Gallery"
      

  })
  return (
    <>
      <header >
        <a href='#' className='logo'>
          <img src='https://luxorpen.com/images/logo/logo.png' />
        </a>
        <div className='search'>
          <input className='inputData' placeholder='Search' />
          <AiOutlineSearch className='searchIcon' />
          <select className='selectData' onChange={(e) => { }}>
            <option value="">Lang</option>
            <option value="Enh">English</option>
            <option value="Hin">Hindi</option>

          </select>
        </div>

      </header>
      <nav>

        <ul className='navbar'>

          <li><a href="#about"><select className='aboutus'>
            <option value="">About Us</option>
            <option value="Vision">Vision</option>
            <option value="Mission">Mission</option>
            <option value="Milstone">Milstone</option>
          </select></a></li>
          <li><a href="#skills">Product</a></li>
          <li><a href="#services">E- Catalogue</a></li>
          <li><a href="#contact">Media</a></li>
          <li><a href="#contact">Art Gallery</a></li>
          <li><a href="#contact">Career</a></li>

        </ul>

      </nav>

    {/*  <section className='background'>
        <div className='backgroundImage'>
          <img src={Image} alt='' />
        </div>

      </section>
  */}

   
  <Carasol />


      
      <section className="home" >

        <div className="home1-img ">

          <img src={worldMap} alt="" />

        </div>
        <div className="home-text">
          <h1>Luxor All</h1>
          <h1>Around The World</h1>
          {/* <h2>Frontend Developer</h2> */}
          <p>Luxor is a pioneer and a brand leader in the writing instrument industry
            with a significant presence in the international market. Luxor is exporting
            products to more than 106 countries across the globe including USA,
            Australia, Russia, UK, Europe, UAE and many other markets. Our range of
            products include - Kids Markers, Highlighters, Eco-friendly Stationeries,
            O‹ce & Personal Stationeries.</p>
          <a href="#" className="btn-bg">Explore</a>
        </div>

      </section>

      <section className='launch'>
        <div class="heading">
          <h2>New Launches</h2>
        </div>
        <div className='carouselItem'>
          <div className='posterBlock'>
            <img src="https://luxorpen.com/images/bp/xonox-bp/black-m.jpg" />
            <div className='textBlock'>
              <span className='title'>
                Ball / Gell Pens
              </span>
            </div>

          </div>

          <div className='posterBlock'>
            <img src="	https://luxorpen.com/images/hl/textliter-hl/text-li-green-m.jpg" />
            <div className='textBlock'>
              <span className='title'>
                Highliter
              </span></div>
          </div>
          <div className='posterBlock'>
            <img src="https://luxorpen.com/images/wb/wb-450/wb450-blue.jpg" />
            <div className='textBlock'>
              <span className='title'>
                White Board Markers
              </span></div>
          </div>
          <div className='posterBlock'>
            <img src="	https://luxorpen.com/images/pm/pm-1222/pm1222-blue.jpg" />
            <div className='textBlock'>
              <span className='title'>
                Permanent Markers
              </span></div>
          </div>

        </div>
      </section>

      <section>
        <div className='products'>
          <div className='prodBackground'>
            <div class="heading1">
              <h2>Products</h2>
            </div>
          </div>
          <div class="product-container">
            <div class="product-box">
              <h3>SCHOOL</h3>
              <div className='product-img'>
                <img src={Image1} alt='' />
              </div>

            </div>
            <div class="product-box">
              <h3>ART</h3>
              <div className='product-img'>
                <img src={Image2} alt='' />
              </div>
            </div>
            <div class="product-box">
              <h3>OFFICE</h3>
              <div className='product-img'>
                <img src={Image3} alt='' />
              </div>
            </div>

          </div>
          <div className='product-btn'>
            <a href="#" className="btn-box">All Products</a>
          </div>

        </div>
      </section>

      <section className='exported'>
        <div class="heading">
          <h2>Exported To Over 106+ Countries</h2>
        </div>
        <div className='home-container'>
        <div className="homeImg ">

          <img src={Image4} alt="" />

        </div></div>

      </section>

      <section className='luxor-container'>
      <div class="heading">
          <h2>Luxor’s Journey</h2>
        </div>
        <div className='home-container'>
        <div className="homeImg-luxor ">

          <img src={Image5} alt="" />

        </div></div>
      </section>


      <section className='luxor-container'>
      <div class="heading">
          <h2 style={{
             lineHeight:"80%" ,
             color:"green",
             fontSize:"70px"
          }}>Let's save the <br /> environment with Luxor</h2>
        </div>
        <div className='home-container'>
        <div className="homeImg-luxor ">
        <p style={{
           padding:"70px",
           fontSize:"25px",
           color:"rgba(61, 57, 59, 0.69)"
        }}>
         
        Evolution of humans has done nothing but harm to our planet, the number of non-biodegradable dumps we have 
made is turning our planet hostile and non-biodegradable & plastic products are the prime reasons behind our
planet's vulnerability. Acknowledging the harm we have caused to our planet has made everyone quite aware & active 
about following ways to endure a life without causing loss to our surroundings and therefore the demand for 
eco-friendly products is on rise, especially in the international market.
 <br />  <br />
Luxor International takes a step ahead with an e‘ort & aim to help our planet breathe well, by adding stationeries that 
are made of recycled materials to our range of drawing and writing instruments

</p>
        </div></div>
      </section>

 <div className='art-gallery'>
  <div className='Art_gallery_button'>
   </div>

   <img src={ArtGallery} style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
   }} alt="" />
  
 </div>


 <section className='luxor-container'>
 <div class="heading">
     <h2 style={{
        lineHeight:"80%" ,
        color:"red",
        fontSize:"70px" ,
        margin:"50px 0px"

     }}>Look Book  </h2>
   </div> 


   <div className='home-container'>
   <div className="homeImg-luxor ">
   <p style={{
      padding:"70px",
      fontSize:"25px",
      color:"rgba(61, 57, 59, 0.69)"
   }}>

 <div style={{
  display:"flex",
  gap:"150px",
 }}>
 <ImageContainer  src={I1} t1="up your presentation " t2 =   "Game" />
 <ImageContainer  src={I2} t1="Spark your creativity with" t2 =   "Luxor pens" />
 <ImageContainer  src={I3} t1="How to choose the  " t2 =   "Best highlighter pen " />
  
 </div>
   


</p>
   </div></div>
 </section>










    </>
  );
}

export default App;
