import classes from './Modal.module.css'
import ReactDom from 'react-dom'
import { Fragment } from 'react'

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

function ModalBackDrop() {
    return (
        <div className={classes.backdrop} />
    )
}


function Modal(props) {
    return (
        <Fragment>
            {ReactDom.createPortal(<ModalOverlay> {props.children} </ModalOverlay>,
                 document.getElementById('overlays') )}
            {ReactDom.createPortal(<ModalBackDrop />, document.getElementById('overlays'))}
        </Fragment>
    )
}

export default Modal