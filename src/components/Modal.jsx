import React from 'react'

const Modal = ({setOpenModal, onePizza}) => {
  return (
    <div className="modal-back">
        <div className='modal'>
            <button onClick={() => setOpenModal(false)}><h1>X</h1></button>
            <div className="modal-main">
                <div className="modal-main_img">
                        <img src={onePizza.image} alt="" />
                </div>
                <div className="modal-main_text">
                    <div className="desc">

                                <h1>{onePizza.title}</h1>
                                <p>{onePizza.description}</p>
                    </div>
                    <div className="prices">
                        <h2>{onePizza.price }.000 UZS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Modal;