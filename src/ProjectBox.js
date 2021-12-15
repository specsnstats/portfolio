import React from "react";
import acnh from "./img/acnh.jpg"
import rainbowManatee from "./img/rainbow-manatee.png"
import scheduler from "./img/scheduler.jpg"
import petit from "./img/petit.png";
import ReactMarkdown from 'react-markdown'

const projects = [
    {
        name: "AC:NH Island Manager",
        img: acnh,
        github: "https://github.com/Rallen4/project1-animal-crossing",
        url: "https://rallen4.github.io/project1-animal-crossing/",
        description: "Animal Crossing: New Horizons Island Manager feeds info from an API and tracks user inputs with Local Storage, allowing them to filter and sort based off of desired results. These results are then saved the next time you visit, and whenever you leave the website.",
        contribution:"In this project, I was the Project Manager in a group with 3 other developers. My responsibilities also were fetching the API info, and displaying it in the table on the page, depending on the filters/categories that the user selected. I was also responsible for every time the user clicked on the box of a collectible, the local storage would update to reflect the user selection. I also provided support for other team members in the styling of the website.",
        tech:"Javascript, HTML, CSS",
        color:"125,176,242",
    },
    {
        name: "Manatee Cookie-Clicker",
        img: rainbowManatee,
        github: "https://github.com/POlsen-92/Manatee-Clicker",
        url: "https://manatee-clicker.herokuapp.com/",
        description: "A cookie clicker with a back-end server and database that keeps track of user scores and levels to display to a learderboard. Full login functionality (including the ability to update password/username), and integration of several technologies.",
        contribution: "In this project, I was the Project Manager in a group with 3 other developers. My responsibilities in the project itself were handling the functionality of the cookie clicker, the upgrading/purchasing of manatees, the modal showing the name/role/img of the developers, and dealing with the Login/Logout functionality.",
        tech:"JS, HTML, CSS, Handlebars",
        color:"184,61,83",
    },
    {
        name: "PetIt",
        img: petit,
        github: "https://github.com/dimitermusic/petit-frontend",
        url: "https://petit-petfriendly.herokuapp.com/",
        description: "Website designed for User-Driven reviews on the pet-friendliness of establishments, both for a customer and a job POV. Fetches locations from google's API, and displays the information saved to the database that cooresponds to that specific location",
        contribution:"In this project, I was the Project Manager in a group with 3 other developers. My responsibilities in the project itself were creating the page navigation and Login/Signup/Profile functionality. I was also in charge of grabbing the information from the database and displaying/formatting it correctly on the individual locations page, changing whether the location is a Job or an Establishment.",
        tech:"JS, HTML, CSS, React",
        color:"188,204,116",
    },
    {
        name: "Day Scheduler",
        img: scheduler,
        github: "https://github.com/specsnstats/work-day-scheduler",
        url: "https://specsnstats.github.io/work-day-scheduler/",
        description: "Simple app that allows users to schedule their days from the hours of 9am to 5pm, then saving your information to Local Storage.",
        contribution: "This was a solo project wherein I created the entire website from the CSS/Styling to the Javascript that runs the processes",
        tech:"HTML, CSS, JS",
        color:"5,107,194",
    }
];

export default function ProjectBox(props) {

    const techRender=(e)=>{
        if(e.includes("Handlebars")){
            return <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-top">
                <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![HandlebarsJS](https://img.shields.io/badge/Handlebars.js-orange?logo=handlebars.js&logoColor=black&style=plastic)</ReactMarkdown>
                </div>
            
        } else if (e.includes("React")){
            return <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-top">
                <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![React](https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=plastic&logo=redux&logoColor=white)</ReactMarkdown>
                </div>
        } else {
            return <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-top">
                <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)</ReactMarkdown>
                <ReactMarkdown className="uk-margin-small-right">![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white)</ReactMarkdown>
                </div>
        } 
    }
    console.log(props.width)

    return (
        <div>
            <ul className="uk-list-divider uk-margin-medium-left uk-margin-medium-right uk-margin-medium-top uk-list-large" uk-accordion="true">

                {projects.map((project) => (
                    <li key={project.name} onClick={props.setColorState(project.color)}>
                        <a style={{
                            padding:"10px",
                            background: `rgb(${project.color})`,
                            background: `linear-gradient(90deg, rgba(${project.color}, 1) 0%, rgba(0,0,0,1)100%)`,

                        }} className="uk-accordion-title" href="#">{project.name}</a>
                        <div style={{
                            display:props.width>1200?"flex":"inline-block"
                        }} 
                        className="uk-accordion-content uk-flex">
                            <div style={{width: props.width>1200?"70%":"100%"}}>
                                <a className="uk-margin-medium-right uk-margin-medium-left" href={project.github} rel="noreferrer" target="_blank">Github Repo</a>
                                <a href={project.url} rel="noreferrer" target="_blank">Live Website</a>
                                <div className="uk-margin-small-top" style={{textDecoration:"underline"}}>Description</div>
                                <div>{project.description}</div>
                                <br/>
                                <div style={{textDecoration:"underline"}}>Contribution</div>
                                <div>{project.contribution}</div>
                                <br/>
                                <div>{techRender(project.tech)}</div>
                            </div>
                            <div className="uk-flex-box">
                                <img className="uk-flex-center" alt="element taken from project page" src={project.img} style={{height:"auto"}}/>
                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}