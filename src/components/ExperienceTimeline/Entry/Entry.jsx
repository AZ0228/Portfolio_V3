import React, { useEffect, useRef, useState } from "react";
import './Entry.scss';
import Background from '../../../assets/background.svg';


export const Entry = ({ data, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const entryRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });
        observer.observe(entryRef.current);
        return () => {
            observer.disconnect();
        }
    }
    , []);

    return (
        <div ref={entryRef} className={`entry ${isVisible ? "visible" : ""}`}style={{backgroundImage:`url(${Background})`}}>
            <div className="entry-content">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
        </div>
    );
}