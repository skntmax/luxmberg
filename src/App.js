import React from 'react';
import './App.css';
import { AiOutlineSearch } from 'react-icons/ai'
import Image from './assets/homeBanner.jpg'
import worldMap from './assets/map.png'
import Image1 from './assets/Products School.png'
import Image2 from './assets/Products Art.png'
import Image3 from './assets/Products Offc.png'
import Image4 from './assets/World Map.png'
import Image5 from './assets/Luxor Journey.jpg'
import Image6 from './assets/enviro-rrr.png'
import Image7 from './assets/girl sketch.png'
import Image8 from './assets/lookbook1.png'
import Image9 from './assets/lookbook2.png'
import Image10 from './assets/lookbook3.png'
import Image11 from './assets/ugc image.png'
import Image12 from './assets/ugc heart.png'
import Image13 from './assets/ugc pen.png'
import Image14 from './assets/org11.png'
import Image15 from './assets/org12.png'
import Image16 from './assets/org3.png'







function App() {
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
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#contact">Media</a></li>
          <li><a href="#contact">Art Gallery</a></li>
          <li><a href="#contact">Career</a></li>

        </ul>

      </nav>

      <section className='background'>
        <div className='backgroundImage'>
          <img src={Image} alt='' />
        </div>

      </section>
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

          </div>
        </div>
      </section>

      {/* --------------------------Environment Section------------------------------------------------ */}

      <section className='environment-container'>

        <div className='env-heading'>
          <h2>Lets Save The</h2>
          <h2>Environment With Luxor</h2>
        </div>

        <div className='env-para'>Evolution  of  humans  has  done  nothing  but  harm  to  our  planet,  the  number  of  non-biodegradable  dumps  we  have made is turning our planet hostile and non-biodegradable &  plastic products are the prime reasons behind our
          planet's v ulnerability. A cknowledging t he h arm w e h ave c aused t o o ur p lanet h as m ade e veryone q uite a ware &  active about  following  ways  to  endure  a  life  without  causing  loss  to  our  surroundings  and  therefore  the demand  for eco-friendly products is on rise, especially in the international market.
          <br />
          <br />
          Luxor I nternational t akes a  s tep a head w ith a n e ‘ort &  aim t o h elp o ur p lanet b reathe w ell, b y a dding s tationeries t hat
          are made of recycled materials to our range of drawing and writing instruments.
        </div>

        <div className='enviro-img'>
          <img src={Image6} alt='' />
        </div>

        {/* -------------------------------------------------------- */}

        <div className='art-gallery'>

          <div className='art-img'>
            <img src={Image7} alt='' />
          </div>

          <div className='art-btn'>
            <button>Art Gallery</button>
          </div>

        </div>

      </section>

      {/* --------------------------------------------------look-book----------------------------------------- */}

      <section className='look-book-container'>

        <div className='look-heading'>
          <h2>Look Book</h2>
        </div>

        <div className='look-book-suggest'>
          <div className='look-img-cont'>
            <img src={Image8} alt='' />
          </div>

          <div className='look-img-cont'>
            <img src={Image9} alt='' />
          </div>

          <div className='look-img-cont'>
            <img src={Image10} alt='' />
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        <div className='ugc-book-suggest'>
          <div className='ugc-img-cont'>
            <img src={Image11} alt='' />
          </div>

          <div className='ugc-img-cont2'>
            <img src={Image12} alt='' />
          </div>

          <div className='ugc-img-cont2'>
            <img src={Image13} alt='' />
          </div>
        </div>

      </section>

      {/* ---------------------------------------------organisation container---------------------------------------------- */}

      <section className='organisation-container'>

        <div className='org-heading'>
          <h2>A Woman-Led Organization</h2>
        </div>

        <div className='org-main'>
         

          <div className='org-img-cont'>
          <div className='org-btn-cont'>
            <div className='org-btn-1'>
              <button>Photos</button>
            </div>
            <div className='org-btn-2'>
              <button>Videos</button>
            </div>
          </div>
            <div className='org-img-card'>
              <img src={Image14} alt='' />
            </div>

            <div className='org-img-card'>
              <img src={Image15} alt='' />
            </div>

            <div className='org-img-card'>
              <img src={Image16} alt='' />
            </div>
          </div>
        </div>

      </section>

      {/* ----------------------------------------------about luxor-------------------------------------- */}

      <section className='about-luxor-container'>

        <div className='luxor-heading'>
          <h2>What People Say About Luxor</h2>
        </div>

        <div>
          <div className='client-detail'>
            <div className='client-img'>
              <img src='' alt='' />
            </div>
            <h3>John</h3>
            <p>Director, GH Coms</p>
          </div>

          <div className='luxor-review'>
            <h3>Client's Review</h3>
            <p>Luxor has always been my ﬁrst choice when it comes to any stationery product.
              Loved It. </p>
            <i></i>
          </div>
        </div>

        <div className='arrow-btn'>
          <div className='arrow-btn-left'>
            <button>+</button>
          </div>

          <div className='arrow-btn-left'>
            <button>+</button>
          </div>
        </div>

      </section>

      {/* ------------------------------------did you know section-------------------------------------- */}

      <section className='dyk-container'>

        <div className='dyk-banner'>
          <div className='dyk-banner1'>
            <h1>DID YOU</h1>
          </div>
          <div className='dyk-banner2'>
            <h1>KNOW?</h1>
          </div>
        </div>
        {/* -------------------------- */}
        <div className='dyk-scroll'>
          <h4>Luxor products have a presence across more than 106 countries.</h4>

          <div className='arrow-btn-left'>
            <button></button>
          </div>

          <div className='arrow-btn-left'>
            <button></button>
          </div>
        </div>

      </section>

      {/* ----------------------------------------footer section------------------------------------------- */}

      <section className='footer'>
        <div className='footer-heading1'>
          <h2>Be Our Partner/Reseller</h2>
        </div>

        <div className='footer-btn'>
          <div className='footer-btn1'>
            <button>Know More</button>
          </div>
          <div className='footer-btn2'>
            <button>Register</button>
          </div>
        </div>

        {/* --------------------------------- */}

        <div className='certi-heading'>
          <h2>Certificates</h2>
        </div>

        <div className='certi-img'>
          <div className='certi-img1'>
            <img src='' alt='' />
          </div>

          <div className='certi-img2'>
            <img src='' alt='' />
          </div>

          <div className='certi-img3'>
            <img src='' alt='' />
          </div>

          <div className='certi-img4'>
            <img src='' alt='' />
          </div>
        </div>

        {/* ----------------------------------- */}

        <div className='award-heading'>
          <h2>Awards &  Recognitions</h2>
        </div>

        <div className='award-img-cont'>
          <div className='award-img'>
            <img src='' alt='' />
          </div>

          <div className='award-img'>
            <img src='' alt='' />
          </div>

          <div className='award-img'>
            <img src='' alt='' />
          </div>
        </div>

        {/* ------------------------------------- */}

        <div className='footer-copyright'>
          <div className='copyright-para'>
            <p>© Copyright Luxor 2023 | All rights reserved</p>
          </div>

          <div className='footer-icon'>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

      </section>


    </>
  );
}

export default App;
