import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import testImage from "./img/test-image.JPG";
import family from "./img/family.png";

export default function Slideshow(props) {

    const fadeImages =[
        {
            url: testImage,
            caption: "fade 1"
        },
        {
            url: family,
            caption: "Family man looking to give his loved ones the best life possible"
        }
    ]

    return (
        <div styles={{height:"300px"}} className="fade-container">
            <Fade>
                {fadeImages.map((fadeImage, index)=>(
                    <div className="each-fade" key={index}>
                        <div className="image-container uk-flex uk-flex-center">
                            <img className="" style={{maxHeight:"400px"}} alt="fadeshow images of Jonathan Newman and his family" src={fadeImage.url}/>
                        </div>
                        <h5 style={{color:"white"}}className="uk-flex uk-flex-center uk-text-center">{fadeImage.caption}</h5>
                    </div>
                ))}
            </Fade>
        </div>
    )
}