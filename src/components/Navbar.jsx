import React from "react";

const Navbar = () => {
    return (
        <div className="bg-[#1e2226] w-100 h-12 p-2 border-b border-neutral-600 flex flex-row justify-between">
           <div className="left justify-center items-center flex ">
            <h3 className="text-xl font-bold p-8 text-slate-400"> REZBOARD</h3>
           </div>
           <div className="right flex items-center space-x-3 text-slate-400 text font-medium">
            <span>Remote dev</span>
            <img className="rounded-full" src="https://placehold.co/35x35/png" alt="" />
           </div>
        </div>
    );
}

export default Navbar;