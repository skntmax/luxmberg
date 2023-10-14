import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Product() {
  return (
    <React.Fragment>
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

                    <li><a href="#skills">Product</a></li>
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>

                </ul>

            </nav>
     
     
      </React.Fragment>
  )
}
