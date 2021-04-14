import React, {Fragment} from 'react';
import Link from 'react-router';

export default function Projects() {

const projects = [
    {id: 1,
    name: "campus cat",
    liner: "Online petition with registration, login, canvas signature and editable user profile.",
    desc: "Student project at Spiced Academy. In this project I built a petition site that can be found here. The cause for this petition is to have cats on campuses, starting with the Spiced Academy campus, for the well-being of the students.",
    stack: "Node (Express), PostgreSQL, jQuery, Handlebars, Canvas, Adobe Photoshop. Deployed on Heroku.",
    url: "http://campuscat.herokuapp.com/",
    features: ["Registration/Login", "Canvas signature", "Editable user profile", "Signers page, can be filtered by city", "Routing middleware that allows only logged-in users to view certain pages, and redirects", "logged-out users to the registration page."],
    gif: "./gifs/Campus-Cat-Preview.gif",
    img: "./images/petition" //render images 1-5 dynamically?,
    git: "https://github.com/MichalFrontEnd/campus-cat",


    }]
}
