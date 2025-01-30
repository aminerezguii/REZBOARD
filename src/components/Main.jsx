import React, {useContext} from "react";
import { MoreHorizontal, UserPlus, Edit2 } from "react-feather";
import CardAdd from "./CardAdd";
import { BoardContext } from "../context/BoardContext";
import { DragDropContext,Draggable,Droppable } from "react-beautiful-dnd";
import AddList from "./AddList";
import Utils from "../utils/Utils";

const Main = () => {

    const {allboard,setAllBoard} = useContext(BoardContext);
    const bdata = allboard.boards[allboard.active];
    
    function onDragEnd(res) {
       if(!res.destination){
        console.log("No Destination");
        return;
       }     
       const newList = [...bdata.list];
       const s_id = parseInt(res.source.droppableId);
       const d_id = parseInt(res.destination.droppableId);
       const [removed] = newList[s_id - 1 ].items.splice(res.source.index,1);
       newList[d_id - 1].items.splice(res.destination.index, 0, removed);

       let board_ = {...allboard};
       board_.boards[board_.active].list = newList;
       setAllBoard(board_);
    }

    const cardData = (e,ind) => {
        let newList = [...bdata.list];
        newList[ind].items.push({id:Utils.makeid(5),title:e});

        let board_ = {...allboard};
        board_.boards[board_.active].list = newList;
        setAllBoard(board_);
        
    }

    const listData = (e) => {
        let newList = [...bdata.list];
        newList.push(
            {id:newList.length + 1 + "",title:e,items:[]}
        );

        let board_ = {...allboard};
        board_.boards[board_.active].list = newList;
        setAllBoard(board_);
        
    }


    return (
        <div className="relative flex flex-col w-full" style={{backgroundColor:`${bdata.bgcolor}`}}>
           <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative p-3 backdrop-blur-md bg-white/20 flex justify-between">
               <h5 className="text-lg font-bold  text-white">{bdata.name}</h5>
               <div className="flex items-center justify-center">
                <button className="hover:bg-gray-50 bg-gray-300 h-8 px-2 py-1 mr-2 rounded flex justify-center text-blue-950 font-medium items-center">
                <UserPlus size={20} className="mr-2" ></UserPlus>  Share </button>
                <button className="hover:bg-gray-400 px-2 py-1 h-8 rounded text-white">
                <MoreHorizontal size={20}></MoreHorizontal>
                </button>
             </div>
              </div>

            <div className="flex flex-col w-full flex-grow relative">
                <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
                
                <DragDropContext onDragEnd={onDragEnd}>
                {bdata.list && bdata.list.map((x,ind)=>{
                    return <div key={ind} className="mr-3 w-60 h-fit rounded-md p-2 bg-stone-950 flex-shrink-0">
                    <div className="list-body">
                       <div className="flex justify-between p-1 text-white font-semibold">
                        <span>{x.title}</span>
                        <button className="hover:bg-cyan-950 p-1 rounded"><MoreHorizontal size={20}></MoreHorizontal></button>
                       </div>
                       <Droppable droppableId={x.id}>
                        {(provided, snapshot) => (
                        <div className="py-1"
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? '#222' : 'transparent' }}
                        {...provided.droppableProps}
                        >
                        {x.items && x.items.map((item,index)=>{
                          return <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="item text-slate-300 flex justify-between items-center bg-zinc-800 p-1 py-2 cursor-pointer rounded-md border-2 border-zinc-800 hover:border-zinc-400">
                            <span>{item.title}</span>
                            <span className="flex justify-start items-start">
                               <button className="hover:bg-gray-600 p-1 rounded-sm"><Edit2 size={20}></Edit2></button>
                            </span>
                           </div>
                         </div>
                          )}
                        </Draggable>;
                          
                          
                          
                       })} 
                            {provided.placeholder}
                            </div>
                        )}
                        </Droppable>;

                       
                       <CardAdd getcard={(e)=>cardData(e,ind)}></CardAdd>

                    </div>
                </div>
                })
                }
                </DragDropContext>

                <AddList getlist={(e)=>listData(e)}></AddList>
                
                  
                </div>
            </div>
        </div>
    );
}

export default Main;