import React from 'react'
import reactDom from 'react-dom'
import "./Modal.css"

const Backdrop = (props) =>{
    return <div className='backdrop'>

    </div>
}

const ModalOverlay = (props) =>{
    return(
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}



const portalElement = document.getElementsByClassName('overlays')[0]

const Modal = (props) => {
    return (
        <React.Fragment>
            {reactDom.createPortal(<Backdrop></Backdrop>, portalElement)}
            {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Modal