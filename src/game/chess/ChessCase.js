import React, { useCallback } from 'react';
import { useEffect } from 'react';
import ChessPiece from './ChessPiece';
import { faChessKing, faChessKnight,faChessPawn, faChessRook, faChessBishop, faChessQueen  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const ChessCase = (props) => {
    const [icon, setIcon] = useState()
    const [selected, setSelected] = useState(false)
    const [className, setClassName] = useState("piece black")
    const clickHandler = useCallback( function(e){
            if(!selected) setSelected(true)
            else if (selected) setSelected(false)
            // options pour deplacer la piece 
            // en fonction de la piece proposer les options 

    }, [selected])

    const setIconFromPiece = useCallback( function(props){
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

    useEffect(() =>{
        setIconFromPiece(props)

        if(props.type === 0 ){
            setClassName( "piece black")
        }
        
        if(props.type === 1){
            setClassName("piece white")
        }

        if(selected){
            setClassName( className => className += " selected")
        }

    }, [props, selected])
    return (
        <div onClick={clickHandler} className={className}>
           <ChessPiece icon={icon}></ChessPiece> 
        </div>
    );
};

export default ChessCase;