// import { React, useState } from 'react';
// import Select from 'react-select';
// function Dropdown ()
// {
//     const colors = [
//         {
//             id: 1,
//             label: "lime",
//         },
//         {
//             id: 2,
//             label: "lavender",
//         },
//         {
//             id: 3,
//             label: "crimson",
//         },
//         {
//             id: 4,
//             label: "darkblue",
//         },
//         {
//             id: 5,
//             label: "teal",
//         },
//         {
//             id: 6,
//             label: "rebeccapurple",
//         },
//         {
//             id: 7,
//             label: "ghostwhite",
//         },
//         {
//             id: 8,
//             label: "aquamarine",
//         },
//         {
//             id: 9,
//             label: "aliceblue",
//         },
//     ]

//     const [color, setColor] = useState("");

//     const click = (event) => {
//         setColor(event.label);
//     }
//     return (
//         <div className='dropdownWrapper'>
//             <style>
//             {
//                 `.button 
//                 {
//                  background-color:` + color + ';'
//                 }
//             </style>

//             <center>
//             <h1>Color Changer</h1>
//             </center>
            
//             <div className="dropdownContainer">
//                 <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
//             </div>
//             <div className="block">
//                 <center>
//                     <button className='button'></button>
//                 </center>
//             </div>
//         </div>

//     );
// }
// export default Dropdown;



import React, { useEffect} from "react";
import { useState } from "react";

const DropDown=()=>{
    const [col,setCol]=useState("");
        useEffect(()=>{
        document.getElementById("box").style.backgroundColor=col})
    const[b,setB]=useState("none")
    useEffect(()=>
    {
        document.getElementById("down").style.display=b;
        }
        )
        return(
            <>
            <h1 id="h">Color Changing UI</h1>
            <div id="container">
            <div id="s">
        <button onClick={()=>{
            if(b=="none"){
                setB("block")
            }
            else
            setB("none")
        }} id= "select"
        >Dropdown</button>
            </div>
        <div id="down">
            <center>
        <button className="bu" value="lime" onClick={e=>setCol(e.target.value)}>Lime</button>
        <button className="bu" value="lavender" onClick={e=>setCol(e.target.value)}>Lavender</button>
        <button className="bu" value="crimson"onClick={e=>setCol(e.target.value)}>Crimson</button>
        <button className="bu" value="darkblue" onClick={e=>setCol(e.target.value)}>Darkblue</button>
        <button className="bu" value="teal" onClick={e=>setCol(e.target.value)}>Teal</button>
        <button className="bu" value="rebaccapurple" onClick={e=>setCol(e.target.value)}>Rebacca Purple</button>
        <button className="bu" value="ghostwhite" onClick={e=>setCol(e.target.value)}>Ghost White</button>
        <button className="bu" value="aquamarine" onClick={e=>setCol(e.target.value)}>Aqua Marine</button>
        <button className="bu" value="aliceblue" onClick={e=>setCol(e.target.value)}>Alice Blue</button>
            </center>
        </div>
        </div>
        <div id="box">
        </div>
        </>
    )
}
export default DropDown