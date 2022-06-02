import React, {useContext} from 'react'
import Modal from '../UI/Modal'
import './Carts.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Carts = (props) => {

    const cartCtx = useContext(CartContext);

    console.log(cartCtx);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cardItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    const cardItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }

    const cartItems = <ul className='cart-items'>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cardItemRemoveHandler.bind(null, item.id)} onAdd={cardItemAddHandler.bind(null,item)}></CartItem>
        ))}
        </ul>

  return (
    <Modal>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <Checkout/>
        <div className='actions'>
            <button onClick={props.closeCart} className='button--alt'>Close</button>
            {hasItems && <button className='buttons'>Order</button>}
        </div>
    </Modal>
  )
}

export default Carts