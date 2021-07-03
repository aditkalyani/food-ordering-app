import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef } from 'react'

function MealItemForm() {
    const amountInputRef = useRef()

    const submitHandler = (event)=>{
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
    }

    return(
        <form className={classes.form}>
            <Input 
                ref={amountInputRef}
                label={'Amount'} 
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button onClick={submitHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm