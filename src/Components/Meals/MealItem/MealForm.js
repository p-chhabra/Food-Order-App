import React,{useRef, useState} from 'react'
import './MealForm.css'
import Input from '../../UI/Input'

const MealForm = (props) => {

  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber)
  }

  return (
    <form action="" className="form" onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            type:"Number",
            id:'amount',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button type='submit'>+ Add</button>
        {!isValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  )
}

export default MealForm