import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import GifPlayer from 'react-gif-player'
import classNames from 'classnames'


export default function SinglePoject(props) {
    const [isPlaying, setIsPlaying] = useState(false)

    return(
        //<div className="proj-bg">
        //    <div className="project">
        //        <Link to= {`/project/${props.folder}`} className={props.class}>
        //        <h2 className="capitalize">{props.name}</h2>
        //        {props.gif ? 
        //            <GifPlayer 
        //                gif={props.gif}
        //                still={`${props.imgsrc}/1.png`}
        //                onTogglePlay={(e)=> {setIsPlaying(!isPlaying)}}

        //            /> : <img src="images\Comingsoon.png" alt="Coming Soon"></img>
        //        }
        //        <h3>{props.liner}</h3>
        //        <p>Stack: {props.stack}</p>
        //        <p className="giturl">Check out the <a href={props.git}>Code</a></p>
        //        {props.url && ( <p className="projurl">Check out the <a href={props.url}>Project</a></p>)}
        //    </Link>
        //    </div>
        //</div>
        //<div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
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
        //</div>

        //<div className="portfolio-item">
        //    <div className="portfolio-hover">
        //        <div className="portfolio-hover-content"><p>{props.liner}</p></div>
        //   </div>
        //    <img src={props.tv} alt="project" />
        //    <div className="portfolio-caption">
        //        <h4 className="portfolio-caption-heading">{props.name}</h4>
        //        <p className="portfolio-caption-subheading text-muted">{props.liner}</p>
        //    </div>
        //</div>
    )  


}