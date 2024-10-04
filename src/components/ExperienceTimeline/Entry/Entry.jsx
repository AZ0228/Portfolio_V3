import React, { useEffect, useRef, useState } from "react";
import './Entry.scss';
import Background from '../../../assets/background1.svg';


export const Entry = ({ data, index, visible}) => {
    const [isVisible, setIsVisible] = useState(false);
    const entryRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Set to true when the element is visible, excluding top and bottom 100px
                    setIsVisible(true);
                } else {
                    // Set to false when the element is not visible
                    setIsVisible(false);
                }
            });
        }, {
            rootMargin: "-300px 0px -300px 0px"  // Shrink the top and bottom by 100px
        });
    
        // Ensure that entryRef.current is defined
        if (entryRef.current) {
            observer.observe(entryRef.current);
        }
    
        return () => {
            observer.disconnect();
        };
    }, []);
    
    

    return (
        <div ref={entryRef} className={`entry ${visible ? "visible" : ""}`}style={{backgroundImage:`url(${Background})`}}>
            <div className={`smokescreen ${visible ? "invisible" : ""}`}>
            </div>
            <div className="entry-content">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
        </div>
    );
}