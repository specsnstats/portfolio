import React from "react";

export default function ProjectBox({projects}) {
    return (
        <div>
            <ul>

                {/* {projects.map((project) => (
                    <li>
                        <a className="uk-accordion-title" href="#">{project.name}</a>
                        <div className="uk-accordion-content">
                            <a href={project.github}>Github Repository</a>
                            <a href={project.url}>Live Website</a>
                            <div>{project.description}</div>
                        </div>
                    </li>
                ))} */}

            </ul>
        </div>
    )
}