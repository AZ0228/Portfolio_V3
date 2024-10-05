import React, { useEffect, useRef, useState } from "react";
import './Line.scss';

//portal to dom
import ReactDOM from 'react-dom';

export const Line = ({ index, visible, setPosition }) => {
    const [linePosition, setLinePosition] = useState(0); // State to hold the calculated position

    useEffect(() => {
        const contentElement = document.querySelector('.entry'); // Select the content element
        if (contentElement) {
            const contentRect = contentElement.getBoundingClientRect(); // Get the position of the content element
            setLinePosition(contentRect.left+25); 
            setPosition(contentRect.left+25);
        }
        const handleResize = () => {
            // Update the line position on window resize to keep it responsive
            if (contentElement) {
                const contentRect = contentElement.getBoundingClientRect();
                setLinePosition(contentRect.left+25);
                setPosition(contentRect.left+25);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up on unmount
        };
    }, []); // Empty dependency array to ensure it runs once on mount
    return ReactDOM.createPortal(
        <div className={`line ${visible && "visible"}`} style={{left: `${linePosition}px`}} >
            <div className="thumb"></div>
        </div>,
        document.body
    );
}