import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InputTictactoe from './InputTictactoe';

const Case = (props) => {
    const [value, setValue] = useState("")
    const [clicked, setClicked] = useState(false)
    const [showInput, setShowInput] = useState(false)




    function clickListner(e){
        console.log(props.index)
        props.gridSetGrid[1](props.gridSetGrid[0].map((element,index) => {
           if (index != props.index)  return element
           else return e.target.id
        })
            )
            console.log(e.target.id)
            setValue(e.target.id)
            setClicked(true)

    }

    function displayInput(e){
        if(!clicked){
            setShowInput(true)
        }
    }

    function mouseOver(e){
        e.preventDefault()
        setShowInput(true)
    }
    
    function mouseLeave(e){
        e.preventDefault()
        setShowInput(false)
    }

    return (
        <div onMouseOver={mouseOver}  onMouseLeave={mouseLeave}  className={clicked? "caseclicked case" :"case notclicked"} >
            
            <label className={showInput ? "": "notshown"} htmlFor="X">X</label>
            <InputTictactoe type="X"  click={clickListner} showInput={showInput} id="X"/>
            
            <label className={showInput ? "": "notshown"} htmlFor="O">O</label>
            <input  type="radio" id="O" value="O" showInput={showInput} onClick={clickListner} />
            
           
            <p>{value}</p>
        </div>
    );
};

export default Case;