import React from 'react'
import './../App.css'
import { AiOutlineSearch } from 'react-icons/ai'

import productimg1 from './../assets/product1.png'
import marker from './../assets/marker.png'
import popular1 from './../assets/popular1.png'
import popular2 from './../assets/popular2.png'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <>

 <div>
     

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
                    <li>
                        <a href="#about">
                            <select className='aboutus'>
                                <option value="">About Us</option>
                                <option value="Vision">Vision</option>
                                <option value="Mission">Mission</option>
                                <option value="Milstone">Milstone</option>
                            </select>
                        </a>
                    </li>

                    <li><Link href="/product">Product</Link></li>
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>
                </ul>
            </nav>
 </div>


            <section className='productItem'>
                <div className='productItem-img'>
                    <img src={productimg1} />
                </div>
            </section>
            <section className='productDetail'>
                <div className="row">
                    <div className="col-2">
                        <div className='productmarker'>
                            <img src={marker} />
                        </div>

                    </div>
                    <div className="col-10">
                        <div className='markerheading'>
                            <div className="headingmar" style={{ display: "contents" }} >
                                <h2>BROADLINE MARKER</h2>
                                <p>Kids love Luxor Broadline Markers because they are durable, sturdy, and delightful
                                    to color with. They come in 12 lovely colors, are washable, non-toxic and don't bleed
                                    through most paper.</p>
                            </div>
                        </div>
                    </div>
                </div>

              
            </section>
            <section>
                <div className='products'>
                    <div className='prodBackground'>
                        <div class="heading1">
                            <h2>Popular Picks</h2>
                        </div>
                    </div>
                    <div class="product-container">
                        <div class="product-box">

                            <div className='product-img'>
                                <img src={popular1} alt='' />
                            </div>

                        </div>
                        <div class="product-box">

                            <div className='product-img'>
                                <img src={popular1} alt='' />
                            </div>
                        </div>
                        <div class="product-box">

                            <div className='product-img'>
                                <img src={popular2} alt='' />
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default ProductPage