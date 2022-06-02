import classes from './Checkout.module.css'
import React from 'react'

const Checkout = (props) => {
    <form action="POST">
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal"/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input type="text" id="city"/>
        </div>
        <button>Confirm</button>
    </form>
}

export default Checkout;