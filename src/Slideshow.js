import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import family from "./img/family.jpg";
import profileOld from "./img/old-profile.jpg";
import twitch from "./img/twitch.jpg";
import profileNew from "./img/new-profile.jpg";

export default function Slideshow() {

    const fadeImages =[
        {
            url: profileOld,
            caption: "Extensive experience working with and leading teams to meet deadlines and build growth"
        },
        {
            url: profileNew,
            caption: "Hard-working and excited to tackle new challenges and constantly learn and improve"
        },
        {
            url: family,
            caption: "Family man looking to give his loved ones the best life possible"
        },
        {
            url:twitch,
            caption:"Twitch Partner with a rich and fun personality"
        }
    ]

    return (
        <div styles={{height:"300px"}} className="fade-container">
            <Fade>
                {fadeImages.map((fadeImage, index)=>(
                    <div className="each-fade" key={index}>
                        <div className="image-container uk-flex uk-flex-center">
                            <img 
                            style={{
                                maxHeight:"400px",
                                borderRadius:"50%",
                                boxShadow: "0px 0px 25px 25px rgba(255,255,255,0.2)"
                                
                                }} 
                            alt={fadeImage.caption} src={fadeImage.url}/>
                        </div>
                        <h5 style={{color:"white"}}className="uk-flex uk-flex-center uk-text-center">{fadeImage.caption}</h5>
                    </div>
                ))}
            </Fade>
        </div>
    )
}