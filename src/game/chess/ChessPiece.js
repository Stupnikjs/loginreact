import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ChessPiece = (props) => {
    return (
            <FontAwesomeIcon className="chesspiece" icon={props.icon}></FontAwesomeIcon>
    );
};

export default ChessPiece;