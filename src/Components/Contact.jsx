import React from 'react'
import './../App.css'
import '../assets/css/hp.css'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import mail_us from './../assets/images/aboutpage/mail_us.jpg';

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
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>
                </ul>
            </nav>
            <section className="pt_8">
                <div className="container">
                    <div className="contact_form mt-5">
                        <div className=" mb-3">

                            <h4 className="fs-18 fw-700"> Corporate Office:</h4>
                            <hr></hr>
                            <ul className="">



                                <li className='fs-16 text_black mb-2  text_justify d-flex'><p><i class="fa-solid fa-location-dot me-2"></i></p>   <p>A-40,Hosiery Complex, Phase-|| Extention, Noida-201305, District Gautam Budh Nagar (U.P.)</p>
                                </li>

                                <li className='fs-16 text_black mb-2 text_justify d-flex'><p><i class="fa-solid fa-envelope me-2"></i></p> <p><a className='fs-16 text_black' href="mailto:export.enquiry@luxoroffice.com" >export.enquiry@luxoroffice.com</a></p></li>

                                <li className='fs-16 text_black mb-2 text_justify d-flex'><p><i class="fa-solid fa-phone me-2"></i></p> <p><a className='fs-16 text_black' href="tel:01204899000" >0120-4899000, 4899100</a></p></li>

                            </ul>


                            <h4 className="fs-18 fw-700 mt-4"> International Business:</h4>
                            <hr></hr>
                            <ul className="">



                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-location-dot me-2"></i></p>   <p>C-42,Phase-||, Noida, Noida, Distt. (Near Delhi) Gautam Budh Nagar, (U.P.), 201305</p>
                                </li>

                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-envelope me-2"></i></p> <p><a className='fs-16 text_black' href="mailto:export.enquiry@luxoroffice.com" >export.enquiry@luxoroffice.com</a></p></li>
                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-phone me-2"></i></p> <p><a className='fs-16 text_black' href="tel:01204899000" >0120-4899000, 4899100</a></p></li>
                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-phone me-2"></i></p> <p><a className='fs-16 text_black' href="tel:+91120419700003" >+91-120-4197000-03</a></p></li>



                            </ul>

                        </div>
                        <div className=" mb-3">
                            <img src={mail_us} alt="mail" className=' img-fluid' />
                            <h4 className="fs-18 fw-700 mt-4"> Luxor Euro GmbH</h4>
                            <hr></hr>
                            <ul className="">



                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-location-dot me-2"></i></p>   <p>Almestraße 4-8, 33649 Bielefeld Germany</p>
                                </li>

                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-envelope me-2"></i></p> <p><a className='fs-16 text_black' href="mailto:export.enquiry@luxoroffice.com" >export.enquiry@luxoroffice.com</a></p></li>
                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-phone me-2"></i></p> <p><a className='fs-16 text_black' href="tel:+495219485497" >+49 521 9485497</a></p></li>
                                <li className='fs-16 text_black text_justify d-flex'><p><i class="fa-solid fa-phone me-2"></i></p> <p><a className='fs-16 text_black' href="tel:+495219485496" >+49 521 9485496</a></p></li>



                            </ul>
                        </div>
                        <div>
                            <h3 className='fs-20 fw-700'>Contact Us</h3>
                            <hr></hr>
                            <form action="">
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span for="" className="form-label fs-16 text_width fw-700">Name*</span>
                                    <input type="text" className="form-control rounded-0 shadow-none fs-14 input_field" id="" placeholder="Your Name" />
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span for="" className="form-label fs-16 text_width fw-700">Email*</span>
                                    <input type="email" className="form-control rounded-0 shadow-none fs-14 input_field" id="" placeholder="Your Email Id" />
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span for="" className="form-label fs-16 text_width fw-700">Mobile No*</span>
                                    <input type="number" className="form-control rounded-0 shadow-none fs-14 input_field" id="" placeholder="Your Contact No" />
                                </div>
                                <div className="mb-3 d-flex justify-content-between gap-4">
                                    <span for="" className="form-label fs-16 text_width fw-700">Company Name*</span>
                                    <input type="text" className="form-control rounded-0 shadow-none fs-14 input_field" id="" placeholder="Your Company Name" />
                                </div>
                                <div className="mb-3 ">
                                    <span for="" className="form-label fs-16 fw-700">Describe your Requirements *</span>
                                    <textarea className="form-control mt-2 rounded-0" id="" placeholder="Say something!" rows="3"></textarea>
                                </div>
                                <div className='text-end mt-3'>
                                    <button className='btn text-white btn_submit rounded-0 fs-14'>Submit</button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.220201174292!2d77.4146083!3d28.538065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8c9aaaaaaab%3A0xf5d2ee4d223e6ebd!2sLuxor%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1697965682496!5m2!1sen!2sin" style={{
                            width: '100%',
                            height: '450px',
                            border: '0',
                        }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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
                                <li className='mb-2 d-block fs-14'>  <Link className='text-white' to='/about'>Aboutus</Link></li>
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