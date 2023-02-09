import { Component } from "react";
import { Overlay } from "./Modal.styled";
import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component{

componentDidMount() {
    window.addEventListener('keydown',this.handleKeydown)
}

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
}


handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
    }
}

handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose(); 
        }
    };

render(){
   const {image} = this.props
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <div>
                <img src={image} alt=""/>
            </div>
        </Overlay>,
        modalRoot
);
    }
}


