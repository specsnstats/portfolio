import React from "react";
import acnh from "./img/acnh.jpg"
import rainbowManatee from "./img/rainbow-manatee.png"
import scheduler from "./img/scheduler.jpg"
import petit from "./img/petit.png";

const projects = [
    {
        name: "AC:NH Island Manager",
        img: acnh,
        github: "https://github.com/Rallen4/project1-animal-crossing",
        url: "",
        description: "Animal Crossing: New Horizons Island Manager feeds info from an API and tracks user inputs with Local Storage, allowing them to filter and sort based off of desired results"
    },
    {
        name: "Manatee Cookie-Clicker",
        img: rainbowManatee,
        github: "https://github.com/POlsen-92/Manatee-Clicker",
        url: "https://manatee-clicker.herokuapp.com/",
        description: ""
    },
    {
        name: "PetIt",
        img: petit,
        github: "https://github.com/dimitermusic/petit-frontend",
        url: "https://petit-petfriendly.herokuapp.com/",
        description: ""
    },
    {
        name: "Day Scheduler",
        img: scheduler,
        github: "https://github.com/specsnstats/work-day-scheduler",
        url: "https://specsnstats.github.io/work-day-scheduler/",
        description: ""
    }
];

export default function ProjectBox() {

    return (
        <div>
            <ul className="uk-list-divider uk-margin-medium-left uk-margin-medium-right uk-margin-medium-top uk-list-large" uk-accordion="true">

                {projects.map((project) => (
                    <li style={{
                        backgroundImage: "url(" + project.img + ")",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "30%"
                    }}
                        key={project.name}>
                        <a className="uk-accordion-title" href="#">{project.name}</a>
                        <div className="uk-accordion-content">
                            <a className="uk-margin-medium-right uk-margin-medium-left" href={project.github} rel="noreferrer" target="_blank">Github Repo</a>
                            <a href={project.url} rel="noreferrer" target="_blank">Live Website</a>
                            <div>{project.description}</div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}