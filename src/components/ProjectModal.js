import React, {Fragment, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {Link} from 'react-router-dom';
import GifPlayer from 'react-gif-player'

export default function ProjectModal(props) {
    const [isPlaying, setIsPlaying] = useState(false)
    console.log('props: ', props);

    return (
        <div className="portfolio-shroud" onClick={props.toggle}>
            <Modal isOpen={props.modal} toggle={props.toggle} className="portfolio-modal">
                <ModalHeader className="close">
                    <h1>{props.name}</h1>
                    <button close="true"></button>
                </ModalHeader>
                <ModalBody>{props.stack}</ModalBody>
                <ModalFooter><button onClick={props.toggle} close>close</button></ModalFooter>
            </Modal>
        </div>
    )
}