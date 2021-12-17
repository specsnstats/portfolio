import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import testImage from "./img/test-image.JPG";
import family from "./img/family.jpg";
import profileOld from "./img/old-profile.jpg";
import twitch from "./img/twitch.jpg";

export default function Slideshow() {

    const fadeImages =[
        {
            url: profileOld,
            caption: "Extensive experience working with and leading teams to meet deadlines and build growth"
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
                            <img className="" style={{maxHeight:"400px"}} alt={fadeImage.caption} src={fadeImage.url}/>
                        </div>
                        <h5 style={{color:"white"}}className="uk-flex uk-flex-center uk-text-center">{fadeImage.caption}</h5>
                    </div>
                ))}
            </Fade>
        </div>
    )
}