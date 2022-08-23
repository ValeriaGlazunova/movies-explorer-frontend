import React from "react";
import './Techs.css';

export default function Techs () {
    return (
        <section className="tech-info">
            <h3 className="tech-info__head-title">Технологии</h3>
            <div className="tech-info__description">
                <h4 className="tech-info__central-title">7 технологий</h4>
                <p className="tech-info__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="tech-info__icon-line">
                    <li className="tech-info__icon">HTML</li>
                    <li className="tech-info__icon">CSS</li>
                    <li className="tech-info__icon">JS</li>
                    <li className="tech-info__icon">React</li>
                    <li className="tech-info__icon">Git</li>
                    <li className="tech-info__icon">Express.js</li>
                    <li className="tech-info__icon">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}