import React from 'react'
import people from '../../assests/Group 81.png'
import illusion from '../../assests/Illustration.png'
import  './Header.css';

function Header() {
  return (
    <div className='gtp3__header section__padding ' id='home'>
      <div className='gtp3__header-content'>
        <h1 className='gradient__text'>Lets make GTP3 roles<br></br>Bulding AI unique pics<br></br>Pattern always win.</h1>
        <div className='gtp3__header- content__input'>

                   <p>We are passionate about tecnology granting our customer best experience using Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus reiciendis quas, quibusdam natus repudiandae debitis! Fuga beatae eveniet voluptates eaque eum quidem sequi quasi a, vitae velit ipsa sit explicabo.</p>

          <input type="email" placeholder="Your email here..."/>

          <button type='button' > get started</button>
          <div/>
          <div className='gtp3__header-content__people'>
            <img src={people} alt="people" />
            <p>1000 people requested access before 24hrs</p>
           
            <div className='gtp3__header-image'>
              <img src={illusion} alt="" />
            </div>
           

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header