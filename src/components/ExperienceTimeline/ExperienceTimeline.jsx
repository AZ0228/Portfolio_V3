import React, { useEffect, useRef, useState } from "react";
import './ExperienceTimeline.scss';
import { Entry } from "./Entry/Entry";
import Background1 from '../../assets/background1.svg';
import Experience from "../Experience/Experience";

export const ExperienceTimeline = ({ data }) => {
    const [focusedIndex, setFocusedIndex] = useState(null); // To track the item in focus
    const itemRefs = useRef([]); // Store refs for each timeline item

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.indexOf(entry.target);
                    setFocusedIndex(index); // Update the focused index when the item reaches 400px from top
                }
            });
        }, {
            rootMargin: "-40% 0px -60% 0px", 
            threshold: 0 // Trigger as soon as the element is in the viewport (minus 400px)
        });

        // Observe each timeline item
        itemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            // Disconnect observer on cleanup
            observer.disconnect();
        };
    }, [data]);

    return (
        <div className="experience-timeline">
            <div className="header" >

                    <h2>About me</h2>
                    <p>
                        I’m currently a third year computer science student studying at the Rensselaer Polytechnic Institute. I have a strong passion for web development and have honed my skills in UI/UX design, frontend, and backend development. Specifically, I’m experienced with HTML, CSS, AJAX (js fetch), JavaScript, C++, Python (Flask), and Figma.
                    </p>
                    <p>Explore the milestones and moments that defined my journey below.</p>

            </div>
            <div className="timeline">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${focusedIndex === index ? 'focused' : ''}`} // Add 'focused' class if the item is in focus
                        ref={(el) => (itemRefs.current[index] = el)} // Assign ref for each item
                    >
                        <div className="col">
                            <div className={`timeline-marker ${focusedIndex === index ? 'focused' : ""}`}>
                                <h3>{item.header}</h3>
                            </div>
                        </div>
                        <Entry key={index} data={item} index={index} visible={focusedIndex === index} />
                    </div>
                ))}
            </div>
        </div>
    );
};
