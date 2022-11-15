import React from 'react';
import Case from './Case';
import { useState } from 'react';
import { useEffect } from 'react';

const Tictactoe = (props) => {
    const [grid, setGrid]= useState( ["", "", "" ,"" , "", "" ,"", "", ""])
    const [gameover, setGameOver] = useState(false)
    const [soloTurn, setSoloTurn] = useState(true)


    
    useEffect(()=> {
        // rows 
        
        if (grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== "" ) setGameOver(true)
        if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== "" ) setGameOver(true)
        if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== ""  ) setGameOver(true)
        //colomns
        if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== "" ) setGameOver(true)
        if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== "" ) setGameOver(true)
        if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== "" ) setGameOver(true)
        //diags
        if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== "" ) setGameOver(true)
        if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== "" ) setGameOver(true)
        
        if(!soloTurn){
            
            let randomNum = Math.floor(Math.random())
            let emptyCaseArray = grid.map((element, index) => {
                   
                if (element === "") return  { index: index, 
                element: element}
                
            })
            let emptyCaseArrayFiltered = emptyCaseArray.filter(x => x !== undefined)

            let randomNumEmpty = Math.floor(Math.random() * emptyCaseArrayFiltered.length)

            console.log(emptyCaseArrayFiltered)
             let indexCaseToFill = emptyCaseArrayFiltered[randomNumEmpty].index
            
            setGrid(
                grid.map((element, index) => {
                if (index === indexCaseToFill) return randomNum === 0 ? "O": "X"
                else return element
            })
            )
            console.log(grid)
            setSoloTurn(true)
        }

        if (gameover) {
           const tosend = {
            userid : props.userid, 
            win : true, 

           }
           
        }
    },[grid, gameover])

    return (
        <>
            <div className='tictactoe'>
                { grid.map((element, index) => {
                    return (<Case index={index}  _SetGrid={[grid, setGrid]} _SetSoloTurn = {[soloTurn, setSoloTurn]} />)
                })}
                
            </div>
            <h2>{gameover ? "PARTIE TERMINEE" : "" }</h2>
        </>
    );
};

export default Tictactoe;
