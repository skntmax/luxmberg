import React from 'react'
import './../App.css'
// import './../assets/'
// import './.assets./css./hp.css'
import { AiOutlineSearch } from 'react-icons/ai'

import productimg1 from './../assets/product1.png'
import marker from './../assets/marker_heighlighter-removebg-preview.png'
import popular1 from './../assets/popular1.png'
import popular2 from './../assets/popular2.png'
// import Marker1 from './../assets/1'
// import Marker2 from './../assets/10.png'
import MarkerW from './../assets/Washable.png'
import Marker4 from './../assets/6.png'
import Marker5 from './../assets/8.png'
import MarkerT from './../assets/Non Toxic.png'
import Marker6 from './../assets/6.png'
import Marker7 from './../assets/0.png'
import Background from './../assets/Lineart.png'
import Dyn from './../assets/didYN.png'




import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <>

            <div>


                <header className='header'>

                    <Link to='/' className='logo'>
                        <img src='https://luxorpen.com/images/logo/logo.png' />
                    </Link>

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

                    <ul className='navbar2'>
                        <li>
                            <a href="#about">
                                <select className='aboutus'>
                                <Link to='/About'>
                                    <option value="">About Us</option>
                                    </Link>
                                    <option value="Vision">Vision</option>
                                    <option value="Mission">Mission</option>
                                    <option value="Milstone">Milstone</option>
                                </select>
                            </a>
                        </li>

                        <li><Link href="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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

            {/* -----------------------------------broadline marker--------------------------------------- */}

            <section className='main-broad-container'>

                {/* ---------------------------------------container 1st---------- */}

                <div className='pen-container'>
                    <img src={marker} alt='' style={{

                    }} />
                </div>
                {/* -------------------------container 2nd------------------------ */}
                <div className='marker-container'>
                    {/* ----------------part 1----- */}

                    <div className='broad-section'>

                        <h2>BROADLINE MARKER</h2>

                        <p>Kids love Luxor Broadline Markers because they are durable, sturdy, and delightful
                            to color with. They come in 12 lovely colors, are washable, non-toxic and don't bleed
                            through most paper. </p>

                    </div>

                    {/* ----------------part 2----- */}
                    <div className='color-cont'>
                        <div className='color-heading'>
                            <h3>Available Colors</h3>
                        </div>

                        <div className='color-section'>
                            <div className='color-shade'>
                                <div className='color-shade1'></div>
                                <div className='color-shade2'></div>
                                <div className='color-shade3'></div>
                                <div className='color-shade4'></div>
                                <div className='color-shade5'></div>
                                <div className='color-shade6'></div>
                            </div>
                            <div className='para-shade'>
                                <p>+5 Shades</p>
                            </div>
                        </div>

                    </div>
                    {/* ----------------part 3----- */}
                    <div className='round-img-cont'>
                        <div className='toxic-img'>
                            <img src={MarkerW} alt='' />
                        </div>
                        <div className='toxic-img'>
                            <img src={MarkerT} alt='' />
                        </div>
                    </div>
                    {/* ----------------part 4----- */}
                    <div className='broadline-cont'>
                        <div className='broadline-card'>
                            <img src={Marker4} alt='' />
                            <p>Broadline
                                Marker SRP</p>
                        </div>
                        <div className='broadline-card'>
                            <img src={Marker5} alt='' />
                            <p>Broadline
                                Marker</p>
                        </div>
                        <div className='broadline-card'>
                            <img src={Marker7} alt='' />
                        </div>
                    </div>
                    {/* ----------------part 5-----  */}
                    <div className='dyn-cont'>
                        <div className='dyn-img'>
                            <img src={Dyn} alt='' />
                        </div>
                        <div className='dyn-para'>
                            <p>The colours of the rainbow always go in the same colour:
                                red, orange, yellow, green, blue, indigo and violet.</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* ---------------------------------------------------------------------------- */}

            <section>
                <div className='products'>
                    {/* <div className='bakground-image'>
                        <img src={Background} alt='' />
                    </div> */}
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
    )
}

export default ProductPage