import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {projectsarr} from './data'
import classNames from 'classnames'
import GifPlayer from 'react-gif-player'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=> {
        setProjects(projectsarr);

    },[projects]);

    return (
       <Fragment>
        {projects && 
            projects.slice(0).reverse().map((proj, i)=> {
                return (
                    <div key={i} className="proj-bg">
                        {/*<Link to= {`/project/${proj.folder}`} className={proj.class}>*/}
                            <h2 className="capitalize">{proj.name}</h2>
                            {proj.gif ? 
                                <GifPlayer 
                                    gif={proj.gif}
                                    still={`${proj.imgsrc}/1.png`}
                                    onTogglePlay={(e)=> {setIsPlaying(!isPlaying)}}

                                /> : <img src="images\Comingsoon.png" alt="Coming Soon"></img>
                            }
                            <h3>{proj.liner}</h3>
                            <p>Stack: {proj.stack}</p>
                            <p className="giturl">Check out the <a href={proj.git}>Code</a></p>
                            {proj.url && ( <p className="projurl">Check out the <a href={proj.url}>Project</a></p>)} 
                        {/*</Link>*/}
                    </div>
                );
            })}
    </Fragment>
)}
