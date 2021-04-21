import React, {Fragment, useEffect, useState} from 'react';
import Link from 'react-router';
import {projectsarr} from './data'
import classNames from 'classnames'
import GifPlayer from 'react-gif-player'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(()=> {
        setProjects(projectsarr);

    },[projects]);

    return (
   
    <Fragment>

        {projects && 
            projects.map((proj, i)=> {
                return (
                    <div key={i} className="proj-bg">
                        <div className={proj.class}>
                            <h2>{proj.name}</h2>
                            {/*{proj.gif && 
                            (<img src={proj.gif}  alt={`GIF of ${proj.name}`}></img> )}*/}
                            <h4>{proj.liner}</h4>
                        </div>
                    </div>
                );
            })}
    </Fragment>
)}
