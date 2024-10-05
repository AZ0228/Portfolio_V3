import React, { useState, useEffect, useRef, useCallback } from 'react';
import Background from '../../assets/background2.svg';
import Spotlight from '../../assets/spotlight1.svg';
import Experience from '../../components/Experience/Experience';
import { ExperienceTimeline } from '../../components/ExperienceTimeline/ExperienceTimeline';
import { Line } from '../../components/Line/Line';
import { Icon } from '@iconify/react';

import './Home.css';
import activeherb from '../../assets/activeherb.png';

import { experiences } from '../../data/experiences';

const Home = () => {
    const [showLine, setShowLine] = useState(false);
    const [linePosition, setLinePosition] = useState(0);
    const [lineAnimation, setLineAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLineAnimation(true);
        }, 100);
        setTimeout(() => {
            setShowLine(true);
        }, 2000);
    }, []);


    const numAnimations = 2;
    return (
        <div className="home page">
            <Line visible={showLine} setPosition={setLinePosition}/>
            <section className="hero">
                <div className="line-animation" style={{left: `${linePosition}px`}}>
                    <div className={`thumb ${lineAnimation && "visible"}`}></div>
                </div>

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
                    <h3>I build meaningful and impactful digital experiences.</h3>
                    <div className={`scroll`} style={{animationDelay: `3s`}}>
                        
                        <Icon icon="line-md:chevron-down" />
                
                        
                        <p>scroll to learn more about me</p>
                    </div>
                    {/* <div className="button-container">
                        <button>learn more about e</button>
                    </div> */}
                </div>
            </section>
            <ExperienceTimeline data={experiences}/>
            
        </div>
    );
}

export default Home;