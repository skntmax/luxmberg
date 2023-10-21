import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'

const  Header =()=>{
     
const [link , setLink ]  = useState('')
    return (
        <React.Fragment>

                <header className='header'>
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


            <nav className='navbar'>
                <ul>
                    <li>
                    <a  >
                        <select className='aboutus' onChange={e=>  window.location.href= e.target.value  }>
                            
                            <option selected  hidden  > choose </option>
                            <option value="about" > About Us  </option>
                            <option value="Vision">Vision</option>
                            <option value="Mission">Mission</option>
                            <option value="Milstone">Milstone</option>
                        </select>
                    </a>
                    </li>

                    <li><Link to="/product">Product</Link></li>
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>

                </ul>

            </nav >
             

        </React.Fragment>
        
    )
}

export default Header