import React from 'react';
import classes from './Modal.css';
import Backdrop from './Backdrop';

const Modal = (props) => {
    let element = null;
    if(props.show)
    {
        element = (
            <div>
            <Backdrop show = {props.show} clicked={props.ModalClosed}/>
            <div className={classes.Modal} >
            {props.children}
           </div>
           </div>
        ) 
    }
return(
        <div>           
            {element}
        </div>
)
}

export default Modal;

