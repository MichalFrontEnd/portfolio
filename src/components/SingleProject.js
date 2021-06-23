import React, {Fragment, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import GifPlayer from 'react-gif-player'

import ProjectModal from './ProjectModal'


export default function SinglePoject(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return(
    //Maybe convert to card later?
            <Fragment>
                {modal && (
            <ProjectModal {...props} toggle={toggle} modal={modal}/>

    )}
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1" onClick={() => toggle()}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><p>{props.stack}</p></div>
                        </div>
                            <img className="img-fluid" src={props.tv} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <h4 className="portfolio-caption-heading mt-4 capitalize">{props.name}</h4>
                        <p className="portfolio-caption-subheading text-muted mt-4">{props.liner}</p>
                    </div>

                </div>
            </Fragment>
    )  


}