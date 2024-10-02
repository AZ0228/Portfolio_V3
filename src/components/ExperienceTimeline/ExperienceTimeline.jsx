import React, { useEffect, useRef, useState } from "react";
import './ExperienceTimeline.scss';
import { Entry } from "./Entry/Entry";

export const ExperienceTimeline = ({ data }) => {
    return (
        <div className="experience-timeline">
            <div className="header">
                <h2>Changelog from my journey</h2>
                <p>I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey.</p>
            </div>
            <div className="timeline">
                {data.map((item, index) => (
                    <div className="timeline-item">
                        <div className="col">
                            <div className="timeline-marker">{item.header}</div>
                        </div>

                        <Entry key={index} data={item} index={index}/>
                    </div>
                ))}
            </div>
        </div>
    );
}