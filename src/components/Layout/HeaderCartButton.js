import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
    return (
        <div className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >
                Your cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </div>
    )
}

export default HeaderCartButton