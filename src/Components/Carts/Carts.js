import React from 'react'
import Modal from '../UI/Modal'
import './Carts.css'

const Carts = (props) => {

    const cartItems = <ul className='cart-items'>{[{
        id:'c1',
        name: 'Sushi',
        amount:2,
        price: "12.99"
    }].map((item) => {return <li> {item.name} </li>})}</ul>

  return (
    <Modal>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>35.78</span>
        </div>
        <div className='actions'>
            <button onClick={props.closeCart} className='button--alt'>Close</button>
            <button className='buttons'>Order</button>
        </div>
    </Modal>
  )
}

export default Carts