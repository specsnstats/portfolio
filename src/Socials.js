import React from "react";
import ReactMarkdown from 'react-markdown';


export default function Socials() {

    const openTwitter = window.open("https://twitter.com/specsnstats")

    return(
        <div className="uk-margin-medium-top uk-flex-center uk-flex uk-margin-large-left">
            <ReactMarkdown onClick={openTwitter} className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/-Twitter-1DA1F2?style=plastic&logo=twitter&logoColor=white)</ReactMarkdown>
            <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github&logoColor=white)</ReactMarkdown>
            <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/-LinkedIn-0A66C2?style=plastic&logo=github&logoColor=white)</ReactMarkdown>
            <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/-Twitch-9146FF?style=plastic&logo=twitch&logoColor=white)</ReactMarkdown>
            <ReactMarkdown className="uk-margin-small-right">![CSS3](https://img.shields.io/badge/-YouTube-FF0000?style=plastic&logo=youtube&logoColor=white)</ReactMarkdown>
        </div>
        )
}