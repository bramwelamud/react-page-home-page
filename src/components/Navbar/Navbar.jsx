import React,  {useState} from 'react'

import './Navbar.css';
import {RiMenu3line, RiCloseLine, } from 'react-icons/ri';
import logo from '../../assests/th.png';

const menu=()=>(<><p><a href="#home">home</a></p>
<p><a href="#Wgtp3">what is GTP3 </a></p>
<p><a href="#possibility">Open AI</a></p>
<p><a href="#featuees">Case study</a></p>
<p><a href="#blog">Library</a></p>
</>)
function Navbar() {
  const {toggleMenu, setToggleMenu}=useState(false);
  return (
   
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar__links'>
        <div className='gtp3__navbar__links__logo'>
          <img src={logo} alt="logo" />
          <div className='gtp3__navbar__links__container'>
            <p><a href="#home">home</a></p>
            <p><a href="#Wgtp3">what is GTP3 </a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#featuees">Case study</a></p>
            <p><a href="#blog">Library</a></p>
            <menu/>
            <div className='gtp3__navbar__sign'>
              <p>Sign up</p>
              <button type='button'>sign up</button>
            </div>
            <div className='gtp3__navbar__menu'>
            
            {
              toggleMenu
              
            }
             
             {
              toggleMenu && (<div className='gtp3__navbar__menu_container__scale__up__center'>
                <div className='gtp3__navbar__menu__container__links'></div>
              </div>)
              
             }
            
            <menu/>
            <div className='gtp3__navbar__ menu'>
            <p>Sign up</p>
              <button type='button'>sign up</button>
            </div>
              
            </div>
          </div> 
        </div>
      </div>
      
    </div>
  )
};

export default Navbar
