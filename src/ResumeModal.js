import React from "react";

export default function ResumeModal() {
    const openResume= ()=>{
        window.open("https://docs.google.com/document/d/1r1laWAHPeWU9wLy0nXtxNUE4mXkpqxZX433YmneQSuk/edit?usp=sharing")
    }

    return(
        <div className="uk-margin-small-top uk-flex uk-flex-center">
            <button style={{color:"white"}}className="uk-button-default uk-button-large" target="_blank" onClick={openResume} >Resume</button>
        </div>
    
        )

}
