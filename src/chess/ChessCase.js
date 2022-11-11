import React from 'react';
import { useEffect } from 'react';
import ChessPiece from './ChessPiece';
import { faChessKing, faChessKnight,faChessPawn, faChessRook, faChessBishop, faChessQueen  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ChessCase = (props) => {
    const [icon, setIcon] = useState()

    useEffect(() =>{
        console.log(props)
        if (props.piece !== undefined){
            if (props.piece.fonction === "Rook") setIcon(faChessRook)
            if (props.piece.fonction === "Bishop") setIcon(faChessBishop)
            if (props.piece.fonction === "Knight") setIcon(faChessKnight)
            if (props.piece.fonction === "King") setIcon(faChessKing)
            if (props.piece.fonction === "Queen") setIcon(faChessQueen)
            if (props.piece.fonction === "Pawn") setIcon(faChessPawn)
            if (props.piece.fonction === "blank") setIcon("")
        }
        
        
    }, [props.piece])
    return (
        <div className={props.type === 0 ? "piece black" : "piece white"}>
           <ChessPiece icon={icon}></ChessPiece> 
        </div>
    );
};

export default ChessCase;