import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChessCase from './ChessCase';



function testequality(arr, index, id){
    if (arr[0] === index && arr[1]=== id) return true
   }


// reducer of boardGame represent all cases
function reducer(state, action){
    switch(action.type){
        case "lightpiece": return (state.map((element, index ) => {
            return element.map((elt, ind) => {
                if (testequality(action.coordinates , index, ind)) {elt.lighted = true; return elt }
                else return elt
            })
        }))

    }

}


const ChessBoard = () => {
    const board = [
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0], 
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
        [0, 1, 0, 1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1, 0, 1, 0],  
]

    const boardPiece = ["Rook", "Knight", "Bishop", "Queen", "King", "Pawn"]
    

    const initPieces = () => {
        // create each pieces find a cleaner way to do this 
        return  [createPiece(0, [0, 0], "white", 0), 
        createPiece(1, [0, 1], "white", 1), 
        createPiece(2, [0, 2], "white", 2), 
        createPiece(3, [0, 3], "white", 3), 
        createPiece(4, [0, 4], "white", 4), 
        createPiece(2, [0, 5], "white", 5), 
        createPiece(1, [0, 6], "white", 6), 
        createPiece(0, [0, 7], "white", 7), 
        createPiece(5, [1, 0], "white", 8), 
        createPiece(5, [1, 1], "white", 9), 
        createPiece(5, [1, 2], "white", 10), 
        createPiece(5, [1, 3], "white", 11), 
        createPiece(5, [1, 4], "white", 12), 
        createPiece(5, [1, 5], "white", 13), 
        createPiece(5, [1, 6], "white", 14), 
        createPiece(5, [1, 7], "white", 15), 

        createPiece(0, [7, 0], "black", 16), 
        createPiece(1, [7, 1], "black", 17), 
        createPiece(2, [7, 2], "black", 18), 
        createPiece(4, [7, 3], "black", 19), 
        createPiece(3, [7, 4], "black", 20), 
        createPiece(2, [7, 5], "black", 21), 
        createPiece(1, [7, 6], "black", 22), 
        createPiece(0, [7, 7], "black", 23), 
        createPiece(5, [6, 0], "black", 24), 
        createPiece(5, [6, 1], "black", 25), 
        createPiece(5, [6, 2], "black", 26), 
        createPiece(5, [6, 3], "black", 27), 
        createPiece(5, [6, 4], "black", 28), 
        createPiece(5, [6, 5], "black", 29), 
        createPiece(5, [6, 6], "black", 30), 
        createPiece(5, [6, 7], "black", 31), 
    ]
    }

    const createPiece = (indexPiece, arr, color, id) => {
           return  {
                id: id, 
                fonction: boardPiece[indexPiece], 
                coordinates: arr, 
                color: color, 
            } 
    }
    const [pieces, setPieces] = useState(initPieces())
    
    

   
   function returnIndexOfMatchCoordonate(pieces, index, id){

       // find a piece that has the same coordinate as the indexes that are passed 
      let pieceThatMatch = pieces.find(piece => testequality(piece.coordinates, index, id)) 
      if (pieceThatMatch != undefined) return pieceThatMatch.id
      else return "notfound"
   }



    const InitBoard = () => {
        return board.map(
            (element, index) => {
                return (element.map((elt,ind) => {
                
                    // id de la piece qui a les coordonnées de la case 
                var id = returnIndexOfMatchCoordonate(pieces, index, ind)
                return {
                    type: elt, 
                    id : ind+ 8*index, 
                    piece : pieces[id], 
                    lighted: false,  
                }     
            })   
        )})
    }


    
    const [boardGame, dispatch] = useReducer(reducer, InitBoard()) 
    

    

    useEffect(() => {
        console.log(boardGame)

    }, [])

 

    
    return (
        <div className='chessBoard'>
            {
             boardGame.map((element, index) => {
                return (
                    element.map((elt, ind) => {
                return(
                <ChessCase {...elt} dispatch={dispatch} /> 
                )
                    })
                )
             })
            }
        </div>
    );
};

export default ChessBoard;