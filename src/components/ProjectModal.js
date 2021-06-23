import React, {Fragment, useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import GifPlayer from 'react-gif-player'
import ImageGallery from 'react-image-gallery';

export default function ProjectModal(props) {
    const [isPlaying, setIsPlaying] = useState(false)

    //dynamically create the paths for the imgsrc
    let images = [];
    for (let i = 1; i <= 6; i++) {
      images.push({
        original: `${props.imgsrc}/${i}.png`,
        thumbnail:`${props.imgsrc}/${i}_thumb.png`
      });
    }

    return (
        <div className="portfolio-shroud" onClick={props.toggle}>
            <Modal isOpen={props.modal} contentClassName="portfolio-modal capitalize" toggle={props.toggle} centered fluid>
                <ModalHeader > 
                {/*<button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button>*/}
                    {/*<button close="true" onClick={props.toggle} charCode="X" classsName="close" aria-label="Close"></button>*/}
                    <h1>{props.name}</h1>

                </ModalHeader>
                <ModalBody>
                    <div className="project">
                        <h3>{props.liner}</h3>
                        <div className="gif-container mb-5">
                            {props.gif ? 
                                <GifPlayer 
                                    gif={props.gif}
                                    still={`${props.imgsrc}/1.png`}
                                    onTogglePlay={(e)=> {setIsPlaying(!isPlaying)}}
                                /> : <img src="images\Comingsoon.png" alt="Coming Soon"></img>
                            }
                        </div>
                                                <p>Stack: {props.stack}</p>
                        <div className="proj-links">
                            <p className="giturl">Check out the <a href={props.git}>Code</a></p>
                        {props.url && ( <p className="projurl">Check out the <a href={props.url}>Project</a></p>)}
                        </div>
                        
                        {props.img ? 
                        <div className="gallery-container">
                            <p>See some more:</p>
                            <ImageGallery items={images} showBullets={true} 
                            //showThumbnails={true} thumbnailClass="thumbnail" thumbnailPosition="left"
                            />
                        </div> :   null }
                    </div>
                </ModalBody>
                <ModalFooter><button onClick={props.toggle} close>close</button></ModalFooter>
            </Modal>
        </div>
    )
}