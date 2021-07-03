import { useContext } from 'react'
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context"

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((cartNumber, item)=>{
        return cartNumber + item.amount
    }, 0)
    return (
        <div className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >
                Your cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </div>
    )
}

export default HeaderCartButton