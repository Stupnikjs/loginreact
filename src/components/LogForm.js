import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPerson, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LogForm = () => {
    const emailReg = "[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"

    

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [page, setPage] = useState("")
    
    useEffect(()=> {
        let indexSlash = window.location.href.indexOf('3000')
        setPage(window.location.href.substring(indexSlash+5))
        console.log(window.location.href.substring(indexSlash+5))
    }, [page]) 

    
   
    const getData = () => {
        let data = {
            "name" : username, 
            "email" : email, 
            "password" : password, 
        }
        return JSON.stringify(data)
    }
  
    const getInputValue = (e) => {
        if(e.target.name === "username") setUsername(e.target.value)
        if(e.target.name === "email") setEmail(e.target.value)
        if(e.target.name === "password") setPassword(e.target.value)  
    }

    const submitListener = (e) => {
        // let path = ""
        const data = getData()
        
        
        // faire varier l'url en fontion du state 
        fetch("http://localhost:4000/post", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
    },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: data // body data type must match "Content-Type" header
        }).then(data => data) // .then(data => window.location.href = `http://localhost:3000/${data}`)

    }

    return (
            <form >
                <div className='name'>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    <input  type="text" name="username"    onChange={getInputValue}/>
                </div>
                <div className='email'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <input name='email'  type="email"  onChange={getInputValue}/>
                </div>
                <div className='password'>
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    <input type="password" name="password"  onChange={getInputValue}  />
                </div>
                <button type='button'className='submitBtn' onClick={submitListener}> Submit </button>
            </form>
    );
};

export default LogForm;