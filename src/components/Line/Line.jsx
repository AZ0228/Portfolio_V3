import React, { useEffect, useRef, useState } from "react";
import './Line.scss';

//portal to dom
import ReactDOM from 'react-dom';

export const Line = ({ index }) => {
    const [linePosition, setLinePosition] = useState(0); // State to hold the calculated position

    useEffect(() => {
        const contentElement = document.querySelector('.entry'); // Select the content element
        if (contentElement) {
            const contentRect = contentElement.getBoundingClientRect(); // Get the position of the content element
            setLinePosition(contentRect.left+20); // Set the line position 20px to the left of the content element
        }

        const handleResize = () => {
            // Update the line position on window resize to keep it responsive
            if (contentElement) {
                const contentRect = contentElement.getBoundingClientRect();
                setLinePosition(contentRect.left+20);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up on unmount
        };
    }, []); // Empty dependency array to ensure it runs once on mount
    return ReactDOM.createPortal(
        <div className="line" style={{left: `${linePosition}px`}}>
            <div className="thumb"></div>
        </div>,
        document.body
    );
}