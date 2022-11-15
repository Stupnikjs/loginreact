import React from 'react';

const InputTictactoe = (props) => {
    return (
        <input className={props.showInput? "" : "notshown"} onMouseOver={props.hover} type="radio" id={props.type} value={props.type} onClick={props.click} /> 
    );
};

export default InputTictactoe;