import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';



const ChessPiece = (props) => {
    const [className, setClassName] = useState("chesspiece " + "piece" + props.color)

    useEffect(() =>{
        
    })
    return (
            <FontAwesomeIcon className={className} icon={props.icon}></FontAwesomeIcon>
    );
};

export default ChessPiece;