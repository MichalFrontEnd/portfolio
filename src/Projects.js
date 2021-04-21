import React, {Fragment, useEffect, useState} from 'react';
import Link from 'react-router';
import {projectsarr} from './data'
import classNames from 'classnames'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [classes, setClasses] = useState("")


    useEffect(()=> {
        setProjects(projectsarr);
        
        for (let i=0; i >projects.length; i++) {
            setClasses(projects[i].class)}
         
    },[projects]);

        console.log('projects: ', projects);
        console.log('classes: ', classes);
    return (
   
    <Fragment>

        {projects && 
            projects.map((proj, i)=> {
                return (
                    <div key={i} className="proj-bg">
                        <div className={proj.class}>
                            <h2>{proj.name}</h2>
                            <h4>{proj.liner}</h4>
                        </div>
                    </div>
                );
            })}
    </Fragment>
)}
