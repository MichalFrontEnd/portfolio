export const projectsarr = [
    {id: 0,
    name: "campus cat",
    liner: "Online petition with registration, login, canvas signature and editable user profile.",
    desc: "Student project at Spiced Academy. In this project I built a petition site that can be found here. The cause for this petition is to have cats on campuses, starting with the Spiced Academy campus, for the well-being of the students.",
    stack: "Node (Express), PostgreSQL, jQuery, Handlebars, Canvas, Adobe Photoshop. Deployed on Heroku.",
    url: "http://campuscat.herokuapp.com/",
    features: ["Registration/Login", "Canvas signature", "Editable user profile", "Signers page, can be filtered by city", "Routing middleware that allows only logged-in users to view certain pages, and redirects", "logged-out users to the registration page"],
    gif: "./gifs/Campus-Cat-Preview.gif",
    imgsrc: "./images/petition", //render images 1-5 dynamically?
    git: "https://github.com/MichalFrontEnd/campus-cat",
    folder: "petition",
    toleft: true
    },
    {id: 1,
    name: "pattern board",
    liner: "An image board with registration, login, photo upload, hashbrowsing and a comment section.",
    desc: "Student project at Spiced Academy. In this project I built an image board focusing on different types of patterns, for design purposes. A logged-in user can add photos to the board, comment on them and share it on pinterest.",
    stack: "Node (Express), PostgreSQL, Vue.js, AWS (S3), Axios.",
    url: "",
    features: ["Registration/Login", "Photo Upload", "Modal display for clicked image", "Commenting", "Hash browsing", "Infinite scrolling", "Pinterest sharing"],
    gif: "",
    imgsrc: "./images/imgboard", //render images 1-5 dynamically?
    git: "",
    folder: "imgboard",
    toleft: false
    },
    {id: 2,
    name: "threads",
    liner: "A social network for creative people",
    desc: "Student project at Spiced Academy. This is a 2-page social media app that includes: login/registration, authentication, editable user profile (profile picture, bio), wall posts, user search, friend requests functionality, chat.",
    stack: "Node (Express), PostgreSQL, React, React Router, Redux, AWS (S3, SES), Socket.io.",
    url: "",
    features: ["Logo design by Sharo003 @fiverr.com", "Authentcation and password reset via email", "Photo Upload", "Random cover photos with creative themes", "Default profile photo", "Editable bio section", "User search - Also displays the 3 newest users on the site", "Friend request/cancel friend request", "Wall posts - only visible to friends", "Post delete functionality on own wall", "Chat"],
    gif: "./gifs/threads-preview.gif",
    imgsrc: "./images/threads", //render images 1-5 dynamically?
    git: "https://github.com/MichalFrontEnd/threads",
    folder: "threads",
    toleft: true
    },
    {id: 3,
    name: "furmature",
    liner: "A color-matching helper for home design",
    desc: "Graduation project at Spiced Academy. In this single-page app I built in a week I experimented with Konva and React-Konva to create a color-matching app for home design. The app user can drag & drop items, rescale them and color or pattern-fill them. Includes photo upload and image save for the final result..",
    stack: "Node (Express), PostgreSQL, React, Konva, React-Konva, React Color, Redux, AWS (S3), Socket.io",
    url: "",
    features: ["Drag & drop", "rescaling", "Ordering (Layering)", "Random color generator", "Image upload", "Dumping of temprory photo uploads upon leaving the site", "Image save using DataURL"],
    gif: "./gifs/FurMatchure-preview",
    imgsrc: "./images/final", //render images 1-5 dynamically?
    git: "https://github.com/MichalFrontEnd/FurMatchure",
    folder: "final",
    toleft: false
    },
    ]