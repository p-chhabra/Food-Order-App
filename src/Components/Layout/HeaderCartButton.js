import React, {useContext} from 'react'
import './HeaderCartButton.css'
import CartIcon from '../Carts/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0)

  return (
    <button onClick={props.onClick} className='button'>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton