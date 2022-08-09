import React from "react";

function Tooltip({ children, tooltipText }) {
    // This tipRef being used to avoid setting state/re-renders
    const tipRef = React.createRef(null);

    // show/hide events being handled with mouse API 
    function handleMouseEnter() {
        tipRef.current.style.opacity = 1;
        // tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = 0;
        // tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex tiems-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-no-wrap bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="bg-black h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
            {tooltipText}
            </div>
        {children}
        </div>
    );
}

export default Tooltip;