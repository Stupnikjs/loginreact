import React from 'react';
import { useEffect } from 'react';
import ChessPiece from './ChessPiece';
import { faChessKing, faChessKnight,faChessPawn, faChessRook, faChessBishop, faChessQueen  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ChessCase = (props) => {
    const [icon, setIcon] = useState(faChessPawn)

    useEffect(() =>{
        
        if (props.piece === "Rook") setIcon(faChessRook)
        if (props.piece === "Bishop") setIcon(faChessBishop)
        if (props.piece === "Knight") setIcon(faChessKnight)
        if (props.piece === "King") setIcon(faChessKing)
        if (props.piece === "Queen") setIcon(faChessQueen)
        if (props.piece === "") setIcon(undefined)
        
    }, [props.piece])
    return (
        <div className={props.type === 0 ? "piece black" : "piece white"}>
           <ChessPiece icon={icon}></ChessPiece> 
        </div>
    );
};

export default ChessCase;