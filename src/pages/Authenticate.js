import React, { useEffect, useState } from 'react';
import Ballons from '../components/Ballon';
import LogForm from '../components/LogForm';
import { Link } from 'react-router-dom';



const Authenticate = (props) => {
    const [opositetype, setOpositeType] = useState("")

    useEffect(() => {
        if (props.type === "login") setOpositeType("signin")
        if (props.type === "signin") setOpositeType("login")
       
    }, [props.type])

    return (  
            <div className='authenticate' id={props.type}>
                <div className='encreBallon'>
                    <Ballons></Ballons>
                    <LogForm type={props.type} opositetype={opositetype}></LogForm>
                    <Link to={`/${opositetype}`} onClick={
                       () => {
                        if (opositetype === "signin") setOpositeType("login")
                        if (opositetype === "login") setOpositeType("signin")
                       } 
                    }>{opositetype}</Link>
                </div>
            </div>
    );
};

export default Authenticate;