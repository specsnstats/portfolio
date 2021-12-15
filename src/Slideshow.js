import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import testImage from "./img/test-image.JPG";
import family from "./img/family.png";

export default function Slideshow(props) {

    const slideImages =[
        {
            url: testImage,
            caption: "Slide 1"
        },
        {
            url: family,
            caption: "Family man looking to give his loved ones the best life possible"
        }
    ]

    return (
        <div styles={{height:"300px"}} className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=>(
                    <div className="each-fade" key={index}>
                        <div className="image-container uk-flex uk-flex-center">
                            <img className="" style={{maxHeight:"400px"}} src={slideImage.url}/>
                        </div>
                        <h5 className="uk-flex uk-flex-center uk-text-center">{slideImage.caption}</h5>
                    </div>
                ))}
            </Slide>
        </div>
    )
}