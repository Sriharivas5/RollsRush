
import React, { useEffect, useRef, useState } from 'react';

function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const cursorInnerRef = useRef(null);
    const cursorOuterRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            if (cursorInnerRef.current && cursorOuterRef.current) {
                cursorInnerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                cursorOuterRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleMouseDown = () => {
        setIsMouseDown(true);
        if (cursorOuterRef.current) {
            cursorOuterRef.current.style.width = '30px';
            cursorOuterRef.current.style.height = '30px';
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        if (cursorOuterRef.current) {
            cursorOuterRef.current.style.width = '24px';
            cursorOuterRef.current.style.height = '24px';
        }
    };

    const handleDocumentClick = () => {
        handleMouseDown();
        setTimeout(handleMouseUp, 150); // Reset size after a short delay
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []); // Only run once on mount

    return (
        <>
            <div
                ref={cursorInnerRef}
                style={{
                    position: 'fixed',
                    left: '12px',
                    top: '12px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: isHovering ? 'blue' : 'white',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transition: 'transform 0.1s ease-out, background-color 0.1s ease-out',
                }}
            />
            <div
                ref={cursorOuterRef}
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    width: '30px',
                    height: '30px',
                    border: '2px solid white',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transition: 'transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out',
                }}
            />
        </>
    );
}

export default CustomCursor;

