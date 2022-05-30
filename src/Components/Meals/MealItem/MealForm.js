import React from 'react'
import './MealForm.css'
import Input from '../../UI/Input'

const MealForm = () => {
  return (
    <form action="" className="form">
        <Input label="Amount" input={{
            type:"Number",
            id:'amount',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealForm