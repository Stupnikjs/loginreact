import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPerson, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useCallback } from 'react';

const LogForm = (props) => {
     // const emailReg = "[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [page, setPage] = useState("")
    const [fetchUrl, setFetchUrl] = useState("")
 

    useEffect(()=> {
       
        let indexSlash = window.location.href.indexOf('3000'); 
        setPage(window.location.href.substring(indexSlash+5)); 

        if (props.type === "signin") setFetchUrl("http://localhost:4646/signin") 
        if (props.type === "login") setFetchUrl("http://localhost:4646/login") 


        if (username === "" && email === "" && password === "") props.setFormStage(0)
        if (username !== "") props.setFormStage(1)
        if (username!== "" && email !== "") props.setFormStage(2)
        if (username!== "" && email !== "" && password !== "") props.setFormStage(3)
       

    }, [page, props, email, username, password]) 

    
   
    const getData = () => {
        let data = {
            "username" : username, 
            "email" : email, 
            "password" : password, 
        }
        console.log(JSON.stringify(data))
        return JSON.stringify(data)
    }
  
    const getInputValue = useCallback( function (e){
        if(e.target.name === "username") setUsername(e.target.value)
        if(e.target.name === "email") setEmail(e.target.value)
        if(e.target.name === "password") setPassword(e.target.value) 
    }, [username, email, password]) 

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
    const submit = (e) => {
        e.preventDefault()
        const datatopost = getData()
        fetchOptions.body = datatopost
        // faire varier l'url en fontion du state 
             fetch(fetchUrl,fetchOptions)
            .then( data => data.json() )
            .then( data => {
                console.log(data)
                if (page === "login" && data.userid != undefined) { 
                sessionStorage.setItem("jwt", JSON.stringify(data.token))
                window.location.href = `http://localhost:3000/profile/${data.userid}`
            }
                else if (page === "signin") {  
                   // window.location.href = `http://localhost:3000/login`
                }
            })      
     
    }



    return (
            <div className='logFormContainer'>
                
                 <form className="logForm" onSubmit={submit}>
                    <h1>{props.type}</h1>
                    <div className='name'>
                        <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                        <input  type="text" name="username"  placeHolder="name"  onChange={getInputValue}/>
                    </div>
                    <div className='email'>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        <input name='email'  type="email" placeHolder="email"  onChange={getInputValue}/>
                    </div>
                    <div className='password'>
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                        <input type="password" name="password" placeHolder="password"  onChange={getInputValue}  />
                    </div>
                    <button type='submit'className='submitBtn'> Submit </button>
                </form>
            </div>
           
    );
};

export default LogForm;