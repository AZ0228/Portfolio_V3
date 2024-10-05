import React, { useEffect, useRef, useState } from "react";
import './ExperienceTimeline.scss';
import { Entry } from "./Entry/Entry";

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
            <div className="header">
                <h2>My Journey</h2>
                <p>Here&apos;s a timeline of my journey.</p>
            </div>
            <div className="timeline">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${focusedIndex === index ? 'focused' : ''}`} // Add 'focused' class if the item is in focus
                        ref={(el) => (itemRefs.current[index] = el)} // Assign ref for each item
                    >
                        <div className="col">
                            <h3 className={`timeline-marker ${focusedIndex === index ? 'focused' : ""}`}>{item.header}</h3>
                        </div>
                        <Entry key={index} data={item} index={index} visible={focusedIndex === index} />
                    </div>
                ))}
            </div>
        </div>
    );
};
