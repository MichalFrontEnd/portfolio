import React, {useEffect, useState} from 'react';
import {projectsarr} from './../data'
import SinglePoject from '../SingleProject'


export default function Projects() {
    const [projects, setProjects] = useState([])


    useEffect(()=> {
        setProjects(projectsarr);
    },[projects]);

    return (
    <div className="gen-container">
        <div className="proj-container">
            {projects && 
                projects.slice(0).reverse().map((proj, i)=> {
                    return (
                        <SinglePoject {...proj} key={i} />
                    );
                })}
        </div>
    </div >
)}
