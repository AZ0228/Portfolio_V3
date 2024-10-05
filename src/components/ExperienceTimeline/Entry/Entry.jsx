import React, { useEffect, useRef, useState } from "react";
import './Entry.scss';
import Background from '../../../assets/background.svg';
import Background1 from '../../../assets/background1.svg';
import Experience from "../../Experience/Experience";
import Cross from '../../../assets/Cross.svg';



export const Entry = ({ data, index, visible}) => {
    const [isVisible, setIsVisible] = useState(false);
    const entryRef = useRef(null);

    return (
        <div ref={entryRef} className={`entry ${visible ? "visible" : ""}`}style={{backgroundImage:`url(${visible ? Background1 : Background1})`}}>
            <div className="bar"></div>
            <div className="point"></div>
            <div className={`smokescreen ${visible ? "invisible" : ""}`}>
            </div>
            <div className="entry-content">
                <h3><b>{data.title}</b> • {data.company}</h3>
                <p>{data.content}</p>
                {data.bullets && (
                    <ul>
                        {data.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </ul>
                )}
                {/* {data.link && (
                    <div className="link">
                        <img src={data.link.image} alt="" />
                        <a href={data.link.url} target="_blank" rel="noreferrer">{data.link.text}</a>
                        <img src={Cross} alt="" className="cross tl"/>
                        <img src={Cross} alt="" className="cross tr"/>
                        <img src={Cross} alt="" className="cross bl"/>
                        <img src={Cross} alt="" className="cross br"/>
                    </div>
                )} */}
            </div>

        </div>
    );
}