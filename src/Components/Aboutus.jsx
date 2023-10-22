import React from 'react'
import './../App.css'
import '../assets/css/hp.css'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import banner from './../assets/images/aboutpage/banner.jpg';
import fortyyears from './../assets/images/aboutpage/fortyyears.jpg';
import birth_of_luxor from './../assets/images/aboutpage/birth_of_luxor.jpg';
import exporting from './../assets/images/aboutpage/exporting.jpg';
import md_profile from './../assets/images/aboutpage/md_profile.jpg';
import ecowrite from './../assets/images/aboutpage/ecowrite.jpg';
import pcw from './../assets/images/aboutpage/pcw.jpg';
import plexconsil from './../assets/images/aboutpage/plexconsil.jpg';
import wim from './../assets/images/aboutpage/wim.jpg';
import feo from './../assets/images/aboutpage/feo.jpg';

const Aboutus = () => {

    return (
        <>
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
                                <option value=""> <Link to="/about">  About Us </Link></option>
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
            <section className='pb-5 pt_8'>
                <div className="container">
                    <img src={banner} alt="banner" className='w-100 img-fluid' />

                </div>
            </section>
            <section className='pt-3 pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h1 className='fs-40 fw-700 text-center'>Luxor For Every Stage Of Life</h1>
                            <p className='text-center fs-16'>Luxor pioneered the Writing Instruments industry in India fifty nine years ago and
                                today it is India's leading Premium fine Writing Brand, since its inception it has

                                added many laurels to its credit</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4 pe-md-0 ">
                            <img src={birth_of_luxor} alt="birth of luxor" className='img-fluid' />
                        </div>
                        <div className="col-md-4 mb-4 px-md-0">
                            <img src={fortyyears} alt="40 Years" style={{ height: '363px' }} className='img-fluid w-100' />
                        </div>
                        <div className="col-md-4 mb-4 ps-md-0">
                            <img src={exporting} alt="Exporting" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <h3 className='fs-40 my-5 fw-700 text-center'>LEADERSHIP</h3>

            <section className='bg_grey'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 pe-lg-4">
                            <img src={md_profile} className='img-fluid' alt="Pooja Gupta Profile" />
                        </div>
                        <div className="col-md-7 col-lg-8 ps-lg-4 mt-4 mt-md-0 align-self-center">
                            <h3 className='fs-50 text-center text_red fw-600'>Pooja Jain Gupta</h3>
                            <p className='fs-18 text-center text_darkgrey'>Managing Director at Luxor Writing Instruments Pvt. Ltd.</p>
                            <p className='text_justify fs-16 text_darkgrey'>

                                Pooja Jain Gupta
                                Managing Director at Luxor Writing Instruments Pvt. Ltd.
                                Pooja Jain is a prominent name amongst the young successful Indians in business.  As the Managing Director of the Luxor Group; which is a diversified group having  business interests in Writing Instruments, stationery products, Real Estate,  Hospitality, Fiber Optics, Nano Technology(cleaning products for all types of coating  surfaces in B2B businesses for glass, solar panels, metal, leather and textile
                                successfully marked in India as a pioneer, Tablets and Digital office products, with  her astounding corporate capabilities, Pooja’s corporate and social work has  earned her plenty of laurels. She is counted amongst the 25 most powerful women in  Indian Business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <h3 className='fs-16 mb-1 text_justify lh_1  text_darkgrey'>pioneer in Writing Instruments manufacturing; the industry major has re-invented Brand Luxor and brought  world-famous brands like Parker, Pilot, and Waterman under the Group's umbrella to serve the Indian consumer  market.

                    </h3>
                    <h3 className='fs-16 mt-1 text_justify lh_1  text_darkgrey'> Luxor pioneered the Writing Instruments industry in India fifty Four years ago and today it is India's leading Premium  fine Writing Brand, since its inception it has added many laurels to its credit, "Best Exporter Award" for twelve  consecutive years, Selected Super brand India award, Parker trusted brand award are some of the awards bagged  by Luxor. Today we are one of the largest companies in South Asia in our category of writing instruments having a  large share of the industry in India.
                        Our aim has been to drive customer satisfaction. We are a company that adapts and grows by upholding some  lasting principles.</h3>
                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <h3 className='fs-40 fw-700 text-center'>INITIATIVES</h3>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-3 px-lg-0">
                            <img src={ecowrite} alt="ecowrite" className='img-fluid w-100' />
                        </div>
                        <div className="col-md-6 mb-3 px-lg-0">
                            <img src={pcw} alt="pwc" className='img-fluid w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <h3 className='fs-40 text-center fw-700'>AWARDS & RECOGNITION</h3>
                    {/* <div className='awards  owl-carousel owl-theme '>
                        <div className="item">
                            <img src={feo} alt="Awards"  className='img-fluid '/>
                        </div>
                        <div className="item">
                            <img src={wim} alt="Awards"  className='img-fluid '/>
                        </div>
                        <div className="item">
                            <img src={plexconsil} alt="Awards"  className='img-fluid '/>
                        </div>
                    </div> */}
                    <div className="row mt-3">
                        <div className="col-md-4 mb-3">
                            <img src={feo} alt="Awards" className='img-fluid ' />

                        </div>
                        <div className="col-md-4 mb-3">
                            <img src={wim} alt="Awards" className='img-fluid ' />

                        </div>
                        <div className="col-md-4 mb-3">
                            <img src={plexconsil} alt="Awards" className='img-fluid ' />

                        </div>
                    </div>
                </div>
            </section>
            <section className='footer_bg pt_8'>
                <div className="container">
                    <div className='footer-links-column'>
                        <div>
                            <h3 className='fs-20 text-white mb-4'>Products</h3>
                            <ul className='text-white'>
                                <div className='d-flex justify-content-lg-between'>
                                    <div>
                                        <li className='mb-2  d-block fs-14 '><i class="fa-solid fa-play me-2 fs-10"></i>PCW</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Pens</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Highlighters</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Display Pack</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Notebooks &
                                            Stationery</li>
                                    </div>
                                    <div>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Markers</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Art & Hobby</li>
                                        <li className='mb-2  d-block fs-14'><i class="fa-solid fa-play me-2 fs-10"></i>Value Packs</li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div>

                            <h3 className='fs-20 text-white mb-4'>Explore</h3>

                            <ul className='text-white '>
                                <li className='mb-2 d-block fs-14'>  <Link className='text-white' to='/aboutus'>About</Link></li>
                                <li className='mb-2 d-block fs-14'>Career</li>
                                <li className='mb-2 d-block fs-14'>News & Media</li>
                                <li className='mb-2 d-block fs-14'>Partners/Resellers</li>

                            </ul>
                        </div>
                        <div>
                            <ul className='text-white '>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-play me-2"></i>Privacy Policy</li>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-play me-2"></i>Cookie Policy</li>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-play me-2"></i>Terms & Conditions</li>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-play me-2"></i>Awards & Certification</li>

                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-play me-2"></i>Contact Us</li>

                            </ul>
                        </div>
                        <div>
                            <ul className='text-white '>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-envelope me-2"></i>
                                    <Link className='text-white' href='mailto:export.enquiry@luxoroffice.com'>export.enquiry@luxoroffice.com</Link>
                                </li>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-phone me-2"></i>0120-4899000</li>
                                <li className='mb-3 d-block fs-14'><i class="fa-solid fa-location-dot me-2"></i>A-40, Hosiery Complex,Phase-|| Extension Noida  -201305,Gautam budh Nagar (U.P)</li>

                                <li><i class="fa-brands fa-square-facebook fs-16 me-2"></i><i class="fa-brands fa-youtube me-2 fs-16"></i><i class="fa-brands fa-instagram fs-16 me-2"></i><i class="fa-brands fs-16 fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h3 className='text-white fs-16 text-center'>Copyright Luxor 2023 | All Rights Reserved</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Aboutus
