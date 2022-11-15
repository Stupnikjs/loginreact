import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InputTictactoe from './InputTictactoe';

const Case = (props) => {
    const [value, setValue] = useState("")
    const [clicked, setClicked] = useState(value !== "" ? true : false )
    const [showInput, setShowInput] = useState(false)
    

    function clickListner(e){
        props._SetGrid[1](props._SetGrid[0].map((element,index) => {
           if (index != props.index)  return element
           else return e.target.id
        })
            )
            setValue(e.target.id)
            setClicked(true)
            props._SetSoloTurn[1](false)
    }

    function displayInput(e){
        if(!clicked){
            setShowInput(true)
        }
    }

    function mouseOver(e){
        e.preventDefault()
        if (!clicked) setShowInput(true)
    }
    
    function mouseLeave(e){
        e.preventDefault()
        setShowInput(false)
    }

    useEffect(() => {
        if (value !== "") setClicked(true)
        setValue(props._SetGrid[0][props.index])
        
    },[props, value])

    return (
        <div onMouseOver={mouseOver}  onMouseLeave={mouseLeave}  className={clicked? "caseclicked case" :"case notclicked"} >
            
            <label className={showInput ? "": "notshown"} htmlFor="X">X</label>
            <InputTictactoe type="X"  click={clickListner} showInput={showInput} id="X"/>
            
            <label className={showInput ? "": "notshown"} htmlFor="O">O</label>
            <input className={showInput ? "": "notshown"} type="radio" id="O" value="O" showInput={showInput} onClick={clickListner} />
            
            <p>{value}</p>
        </div>
    );
};

export default Case;