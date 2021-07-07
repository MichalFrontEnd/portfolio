import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import GifPlayer from 'react-gif-player'
import ImageGallery from 'react-image-gallery';
import comingsoon from "./assets/img/Comingsoon.png"

export default function ProjectModal(props) {
    const [isPlaying, setIsPlaying] = useState(false)

    //dynamically create the paths for the imgsrc
    let images = [];
    for (let i = 1; i <= 5; i++) {
      images.push({
        original: window.location.origin +  `${props.imgsrc}/${i}.png`,
        thumbnail:window.location.origin +  `${props.imgsrc}/${i}_thumb.png`
      });
    }

    return (
        <div className="portfolio-shroud" onClick={props.toggle}>
            <Modal isOpen={props.modal} contentClassName="portfolio-modal capitalize" toggle={props.toggle} centered fluid>
                <ModalHeader close="X" onClick={props.toggle}> 
                    <h1>{props.name}</h1>
                </ModalHeader>
                <ModalBody>
                    <div className="project">
                        <h3>{props.liner}</h3>
                        <div className="gif-container mb-5">
                            {props.gif ? 
                                <GifPlayer 
                                    gif={window.location.origin + props.gif}
                                    still={window.location.origin + `${props.imgsrc}/1.png`}
                                    onTogglePlay={(e)=> {setIsPlaying(!isPlaying)}}
                                /> : <img src={comingsoon} alt="Coming Soon"></img>
                            }
                        </div>
                                                <p>Stack: {props.stack}</p>
                        <div className="proj-links">
                            {props.url && ( <p className="projurl">Check out the <a href={props.url}>Project</a></p>)}
                            <p className="giturl">Check out the <a href={props.git}>Code</a></p>

                        </div>
                        
                        {props.img ? 
                        <div className="gallery-container">
                            <p>See some more:</p>
                            <ImageGallery items={images} showBullets={true} 
                            showThumbnails={false} thumbnailClass="thumbnail" thumbnailPosition="left" 
                            />
                        </div> :   null }
                    </div>
                </ModalBody>
                {/*<ModalFooter><button onClick={props.toggle} close charCode="X"></button></ModalFooter>*/}
            </Modal>
        </div>
    )
}