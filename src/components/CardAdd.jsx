import React,{useState} from 'react';
import { X,Plus } from 'react-feather';



const CardAdd = (props) => {

    const [card,setCard]= useState('');
    const [show,setShow]= useState(false);
    const saveCard = () => {
        if(!card){
            return;
        }
        props.getcard(card);
        setCard('');
        setShow(!show);
    }

    const closeBtn = ()=>{
        setCard('')
        setShow(!show)
    }


    return (
        <div>
            <div className="flex flex-col">
               {show && <div>
                    <textarea value={card} onChange={(e)=>setCard(e.target.value)} className='p-1 w-full rounded-md border-2 bg-zinc-800 border-zinc-900 text-zinc-200' name="" id="" cols="30" rows="2" placeholder='Enter Card Title or URL '></textarea>
                    <div className='flex p-1'>
                        <button onClick={()=> saveCard()} className='p-1 rounded bg-blue-400 text-zinc-800 font-medium text-sm mr-2'>Add Card</button>
                        <button onClick={()=> closeBtn()} className='p-1 rounded text-white hover:bg-gray-600'><X size={20}></X></button>
                    </div>
                </div>}
                {!show && <button onClick={()=> setShow(!show)} className='flex p-1 w-full justify-start text-white rounded items-center mt-1 hover:bg-gray-800 h-8'>
                    <Plus size={20}></Plus> Add a Card
                </button>}
            </div>
        </div>
    )
}

export default CardAdd;