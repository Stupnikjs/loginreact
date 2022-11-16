import React from 'react';
import Case from './Case';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';


const fetchOptions = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'include', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Credentials': true, 
    'Accept': "*/*"

},
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: ""  // body data type must match "Content-Type" header
}


const Tictactoe = (props) => {

    
    const [grid, setGrid]= useState(["", "", "", "", "", "" ,"", "", ""])
    const [gameover, setGameOver] = useState(false)
    const [soloTurn, setSoloTurn] = useState(true)
    

    const setGameOverifCondition = (grid) => {
        console.log("render") 
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
    }
    
    useEffect(()=> {
        console.log(props)
        setGameOverifCondition(grid)

        if(!soloTurn){
            
            let randomNum = Math.floor(Math.random())
            let emptyCaseArray = grid.map((element, index) => {
                   
                if (element === "") return  { index: index, 
                element: element}
                
            })
            let emptyCaseArrayFiltered = emptyCaseArray.filter(x => x !== undefined)
            let randomNumEmpty = Math.floor(Math.random() * emptyCaseArrayFiltered.length)

            if(emptyCaseArrayFiltered.length > 0){
                var indexCaseToFill = emptyCaseArrayFiltered[randomNumEmpty].index
            }
            
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
           
            fetch(`http://localhost:4646/${props.userid}/tictactoe`, fetchOptions).then(data => data.json()).then(resp => console.log(resp))


           }
           
        }
    ,[grid, gameover])

    return (
        <>
            <div className='tictactoe'>
                { !gameover ? (grid.map((element, index) => {
                    return (<Case index={index}  _SetGrid={[grid, setGrid]} _SetSoloTurn = {[soloTurn, setSoloTurn]} />)})) : "" }      
            </div>
            <h2 className={gameover ? "gameStatus" : ""}>{gameover ? "PARTIE TERMINEE" : "" }</h2>
            
        </>
    );
};

export default Tictactoe;
