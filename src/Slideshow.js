import React from "react";
import testImage from "./img/test-image.JPG"

export default function Slideshow() {

    return (
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">
            <ul className="uk-slideshow-items uk-margin-large-top">
                <li>
                    <img src={testImage} alt="testing the slideshow" uk-cover="true" />
                </li>
                <li>
                    <img src={testImage} alt="testing the slideshow" uk-cover="true" />
                </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
        </div>
    )
}