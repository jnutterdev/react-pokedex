import React from "react";
import Tooltip from './Tooltip';

const Button = () => {

    // function tooltipTextCopy() {
    //     "Plan includes 500 contacts. Select your audience size to calculate your price. The monthly email send limit for Standard plans is 12 times your maximum contact count."
    // }  


    return (
        <div className="my-6">
            <Tooltip tooltipText="Search for a pokémon!">
                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><a href="#home">Find a pokémon</a></button>
            </Tooltip>
        </div>
    )
}

export default Button