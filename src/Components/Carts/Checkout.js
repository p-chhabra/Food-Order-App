import classes from './Checkout.module.css'
import React,{useRef, useState, useEffect} from 'react'

const Checkout = (props) => {

    const isEmpty = (value) => {
        return value.trim() === '';
    }

    const isFiveCharLong = (value) => {
        return value.trim().length === 5;
    }

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const [formInputValidity, setFormInputValidty] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })

    const confirmHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalIsValid = isFiveCharLong(enteredPostal);
        const cityIsValid = !isEmpty(enteredCity);

        setFormInputValidty({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid
        })

        const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if(!formIsValid) return;

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        })

        const form = document.getElementById("form");
        form.reset();
    }

    const nameControlClasses = `${classes.control} ${formInputValidity.name?"":classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street?"":classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formInputValidity.postal?"":classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city?"":classes.invalid}`;

    return(
    <form id="form" className={classes.form} action="POST" onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameInputRef} type="text" id="name"/>
            {!formInputValidity.name && <p>Please enter a valid name</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input ref={streetInputRef} type="text" id="street"/>
            {!formInputValidity.street && <p>Please enter a valid street</p>}
        </div>
        <div className={postalControlClasses}>
            <label htmlFor="postal">Postal Code</label>
            <input ref={postalInputRef} type="text" id="postal"/>
            {!formInputValidity.postal && <p>Please enter a 5 digit postal code</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input ref={cityInputRef}  type="text" id="city"/>
            {!formInputValidity.city && <p>Please enter a valid city</p>}
        </div>
        <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit} type="submit">Confirm</button>
        </div>
    </form>)
}

export default Checkout;