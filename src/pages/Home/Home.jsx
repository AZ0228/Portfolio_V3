import React from 'react';
import Background from '../../assets/background2.svg';
import Spotlight from '../../assets/spotlight1.svg';
import Experience from '../../components/Experience/Experience';
import { ExperienceTimeline } from '../../components/ExperienceTimeline/ExperienceTimeline';

import './Home.css';

const Home = () => {
    const experiences = [
        {
            title: "Software Engineering Intern",
            company: "Activeherb Technology Inc.",
            content: "This is the first experience",
            header: "May 2024 - Current"
        },
        {
            title: "Second Experience",
            content: "This is the second experience",
            header: "Spring 2025"   
        },
        {
            title: "Third Experience",
            content: "This is the third experience",
            header: "Fall 2025"
        }
    ];
    const numAnimations = 2;
    return (
        <div className="home page" >
            <div className="home-background" style={{backgroundImage:`url(${Background})`}}></div>
            <section className="hero">
                <div className="hero-background">

                </div>
                {
                    [...Array(numAnimations)].map((_, i) => (
                        <div key={i} className="ripple" style={{animationDelay: `${(i/2) * 1.5 +1.5}s`}}>
                            <img src={Spotlight} alt="" />
                        </div>
                    ))
                }

                <div className="hero-content">
                    <h1>hello, i'm james</h1>
                </div>
            </section>
            <ExperienceTimeline data={experiences}/>
            <section className="info">
                <Experience index={0}/>
                <Experience index={1}/>
                <Experience index={2}/>
                
            </section>

            
        </div>
    );
}

export default Home;