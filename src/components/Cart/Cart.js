import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart() {
    const cartItems = [{id: 'c1', name: 'Oats', amount: '2', price: '12.99'}]
        .map(item => {
            return (
                <li>
                    {item.name}
                </li>
            )
        })

    return (
        <Modal >
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.6$</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart