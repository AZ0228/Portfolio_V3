import React from 'react';
import Background from '../../assets/background2.svg';
import Spotlight from '../../assets/spotlight1.svg';
import Experience from '../../components/Experience/Experience';
import { ExperienceTimeline } from '../../components/ExperienceTimeline/ExperienceTimeline';
import { Line } from '../../components/Line/Line';

import './Home.css';
import activeherb from '../../assets/activeherb.png';

const Home = () => {
    const experiences = [
        {
            title: "Software Engineering Intern",
            company: "Activeherb",
            header: "May 2024 - Current",
            content:"At Activeherb Technology, I had the opportunity to take ownership of the entire FAQ system, redesigning it to be more intuitive for both customers and staff. By crafting tools that enabled customer service representatives to share links seamlessly and quickly search for answers, I was able to increase FAQ page visits by 50%. This overhaul also dramatically reduced the time it took to resolve customer inquiries. Beyond that, I took on the challenge of optimizing the home page load time, reducing it by 60%. I did this by moving away from external libraries and developing a lightweight custom framework for the animated hero banner—ultimately delivering a smoother and more enjoyable user experience.",
            // bullets: [
            //     "Refactored the entire FAQ system for both customer and staff interfaces by developing tools for customer service representatives that integrated robust link-sharing and search functionalities. These improvements resulted in a 50% increase in FAQ page visits and significantly reduced issue resolution times.",
            //     "Optimized the home page load time by 60% through minimizing reliance on heavy external libraries and developing a custom lightweight framework for the animated hero banner, enhancing the overall user experience."
            // ],
            link:{
                url: "https://www.activeherb.com/",
                text: "Activeherb.com",
                image: activeherb
            }
            
        },
        {
            title: "Founder and Lead Developer",
            company: "Study Compass",
            header: "May 2024 - Current",
            bullets: [
                "Refactored the entire FAQ system for both customer and staff interfaces by developing tools for customer service representatives that integrated robust link-sharing and search functionalities. These improvements resulted in a 50% increase in FAQ page visits and significantly reduced issue resolution times.",
                "Optimized the home page load time by 60% through minimizing reliance on heavy external libraries and developing a custom lightweight framework for the animated hero banner, enhancing the overall user experience."
            ]   
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
            <Line/>
            <section className="hero">
            <div className="home-background" style={{backgroundImage:`url(${Background})`}}></div>

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
                    {/* <div className="button-container">
                        <button>learn more about e</button>
                    </div> */}
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