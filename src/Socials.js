import React from "react";
import ReactMarkdown from 'react-markdown';


export default function Socials() {

    return(
        <div className="uk-margin-medium-top uk-flex-center uk-flex">

            <a href="https://www.twitter.com/specsnstats" target="_blank" rel="noreferrer"><ReactMarkdown className="uk-margin-small-right">![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=plastic&logo=twitter&logoColor=white)</ReactMarkdown></a>

            <a href="https://github.com/specsnstats" target="_blank" rel="noreferrer"><ReactMarkdown className="uk-margin-small-right">![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github&logoColor=white)</ReactMarkdown></a>

            <a href="https://www.linkedin.com/in/jonathan-brad-newman-397ab4102/" target="_blank" rel="noreferrer"> <ReactMarkdown className="uk-margin-small-right">![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=plastic&logo=github&logoColor=white)</ReactMarkdown></a>

            <a href="https://www.twitch.tv/specsnstats" target="_blank" rel="noreferrer"><ReactMarkdown className="uk-margin-small-right">![Twitch](https://img.shields.io/badge/-Twitch-9146FF?style=plastic&logo=twitch&logoColor=white)</ReactMarkdown></a>

            <a href="https://www.youtube.com/channel/UC4K2ox10F6Gjm58a1KfFS7g" target="_blank" rel="noreferrer"><ReactMarkdown className="uk-margin-small-right">![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=plastic&logo=youtube&logoColor=white)</ReactMarkdown></a>

        </div>
        )
}