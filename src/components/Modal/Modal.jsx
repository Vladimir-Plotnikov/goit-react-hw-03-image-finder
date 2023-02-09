import { Component } from "react";
import { Overlay } from "./Modal.styled";
// import PropTypes from 'prop-types'


export class Modal extends Component{

render(){
   
    return (
        <Overlay>
            {/* <button type="button">закрыть модалку</button> */}
            <div className="modal">
                <img src="{image}" alt=""/>
            </div>
        </Overlay>
);
    }
}

