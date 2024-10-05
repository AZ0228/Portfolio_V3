import React from 'react';
import './Experience.css';
import Background from '../../assets/background1.svg';
import Cross from '../../assets/Cross.svg';


const Experience = ({ index, children }) => {
    return (
        <div className="experience-container" style={{backgroundImage:`url(${Background})`, animationDelay: `${index}s`}}>
            <div className="experience"style={{animationDelay: `${index/4}s`}}>
                <img src={Cross} alt="" className="cross tl"/>
                <img src={Cross} alt="" className="cross tr"/>
                <img src={Cross} alt="" className="cross bl"/>
                <img src={Cross} alt="" className="cross br"/>
                {children}
            </div>
        </div>
    );
};

export default Experience;