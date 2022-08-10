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
            className="relative inline-flex items-center "
            onClick={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-nowrap bg-gradient-to-r bg-teal-200 to-gray-700 text-gray-900 px-4 py-2 rounded flex items-center transition-all duration-150 ml-3"
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="bg-teal-200 h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
            {tooltipText}
            </div>
        {children}
        </div>
    );
}

export default Tooltip;