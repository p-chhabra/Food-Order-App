import React from 'react'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImg from '../../assets/meals.jpg'

const Header = (props) => {

  return (
    <React.Fragment>
        <header className='header'>
            <h1>MealStore</h1>
            <HeaderCartButton onClick={props.showCart}/>
        </header>
        <div>
            <img className='main-image' src={mealsImg} alt="" />
        </div>
    </React.Fragment>
  )
}

export default Header