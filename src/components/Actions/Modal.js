import React, { useState, useEffect } from 'react'
import Modal from 'react-awesome-modal';

function ModalMsg(props){

        return (
            <section>
              
                <Modal 
                    visible={props.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => props.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <p>{props.msg}</p>
                        <a href="javascript:void(0);" onClick={() => props.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
}

export default  ModalMsg;