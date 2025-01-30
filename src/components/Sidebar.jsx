import React, { useContext, useState } from "react";
import { ChevronRight, ChevronLeft, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";
import { BoardContext } from "../context/BoardContext";
import { list } from "postcss";

const Sidebar = () => {

    const blankBoard = {
        name:"",
        bgcolor:"f60000",
        list:[]
    };
    const [boardData,setBoarddata] = useState(blankBoard);
    const [collapsed,setCollapsed] = useState(false);
    const [showpop,setShowpop] = useState(false);
    const {allboard,setAllBoard} = useContext(BoardContext);
    const setActiveboard = (i) => {
        let newBoard = {...allboard}
        newBoard.active = i;
        setAllBoard(newBoard);
    }
    const addBoard = () => {
        let newB = {...allboard};
        newB.boards.push(boardData);
        setAllBoard(newB);
        setBoarddata(blankBoard);
        setShowpop(!showpop);
    }
    return (
        
        <div className={`bg-[#221d24] h-screen border-r-2 border-r-cyan-950 transition-all linear duration-500  ${collapsed ? 'w-20' : 'w-80'}`}>
    
            {collapsed && <div className="p-2">
                <button onClick={() => setCollapsed(!collapsed)} className="hover:bg-slate-600 rounded-sm">
                    <ChevronRight size={20}></ChevronRight>
                </button>
                
            </div>}
            
            {!collapsed && <div>
                
                <div className="workspace p-4 flex justify-between border-b-2 border-b-neutral-700 text-gray-300 font-bold ">
                <h1>Remote Dev's Workspace</h1>

                <button onClick={() => setCollapsed(!collapsed)} className="hover:bg-slate-600 rounded-sm">
                    <ChevronLeft size={20}></ChevronLeft>
                    </button>  
                    </div>
                    <div className="bordlist">
                        <div className="flex justify-between px-3 py-3 border-b-2 border-b-neutral-700 text-gray-300 font-normal ">
                            <h2>Boards</h2>
                            

                            <Popover
                            isOpen={showpop}
                            align="start"
                            positions={['right', 'top', 'bottom', 'left']} 
                            content={
                               <div className="text-white ml-3 p-2 w-60 flex flex-col justify-center items-center bg-slate-700 rounded">
                                 <button onClick={() => setShowpop(!showpop)} className="absolute right-2 top-2 hover:bg-gray-500 p-1 rounded"><X size={20}></X></button>
                                 <h6 className="py-3 text-lg font-semibold ">Create Board</h6>
                                 <img src="https://placehold.co/200x120/png" alt="" />
                                 <div className="mt-3 flex flex-col items-start w-full text font-semibold">
                                    <label htmlFor="title"> Board Title <span>*</span> </label>
                                    <input value={boardData.name} onChange={(e)=>setBoarddata({...boardData,name:e.target.value})} type="text" className="mb-2 h-8 px-2 w-full bg-gray-500 rounded" />
                                    <label htmlFor="color"> Board Color </label>
                                    <input value={boardData.bgcolor} onChange={(e)=>setBoarddata({...boardData,bgcolor:e.target.value})} type="color" className="mb-2 h-8 px-2 w-full bg-gray-500 rounded" />
                                    <button onClick={()=>addBoard()} className="w-full rounded h-8 bg-slate-800 mt-2 hover:bg-gray-900">Create</button>
                                 </div>
                               </div>
                            }
                            >
                            <button onClick={() => setShowpop(!showpop)} className="hover:bg-slate-600 rounded-sm">
                                <Plus size={20}></Plus> 
                            </button>
                            </Popover>
                            
                        </div>
                    </div>
                    <ul>
                        {allboard.boards && allboard.boards.map((x,i)=>{
                            return  <li key={i}>
                             <button onClick={()=>setActiveboard(i)} className="px-3 py-2 w-full text-sm flex justify-start align-baseline hover: bg-gray-700 ">
                                 <span className="w-6 h-max rounded-sm mr-2 "style={{backgroundColor:`${x.bgcolor}`}}>&nbsp;</span>
                                 <span>{x.name}</span>
                             </button>
                         </li>

                        })
                        }
                           
                    </ul>
                </div>}
        </div>
    );
}

export default Sidebar;
