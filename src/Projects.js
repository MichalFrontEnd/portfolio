import React, {Fragment} from 'react';
import Link from 'react-router';

export default function Projects() {

const projects = [
    {id: 0,
    name: "campus cat",
    liner: "Online petition with registration, login, canvas signature and editable user profile.",
    desc: "Student project at Spiced Academy. In this project I built a petition site that can be found here. The cause for this petition is to have cats on campuses, starting with the Spiced Academy campus, for the well-being of the students.",
    stack: "Node (Express), PostgreSQL, jQuery, Handlebars, Canvas, Adobe Photoshop. Deployed on Heroku.",
    url: "http://campuscat.herokuapp.com/",
    features: ["Registration/Login", "Canvas signature", "Editable user profile", "Signers page, can be filtered by city", "Routing middleware that allows only logged-in users to view certain pages, and redirects", "logged-out users to the registration page."],
    gif: "./gifs/Campus-Cat-Preview.gif",
    imgsrc: "./images/petition", //render images 1-5 dynamically?
    git: "https://github.com/MichalFrontEnd/campus-cat",
    folder: "petition",
    },
    {id: 1,
    name: "pattern board",
    liner: "An image board with registration, login, photo upload, hashbrowsing and a comment section.",
    desc: "Student project at Spiced Academy. In this project I built an image board focusing on different types of patterns, for design purposes. A logged-in user can add photos to the board, comment on them and share it on pinterest.",
    stack: "Node (Express), PostgreSQL, Vue.js, AWS (S3), Axios.",
    url: "",
    features: ["Registration/Login", "Canvas signature", "Editable user profile", "Signers page, can be filtered by city", "Routing middleware that allows only logged-in users to view certain pages, and redirects", "logged-out users to the registration page."],
    gif: "./gifs/Campus-Cat-Preview.gif",
    imgsrc: "./images/petition", //render images 1-5 dynamically?
    git: "https://github.com/MichalFrontEnd/pattern-board",
    folder: "petition",
    },
    ]
}
