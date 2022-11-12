import React, { useEffect } from 'react';

import LogForm from './LogForm';

import OtherSide from './OtherSide';



const Login = (props) => {
    

    useEffect(() => {
      
    }, [])

    return (  
            <div className='authenticate'>
                <div className='mainSquare'>
                    <div className='logcontainer'>
                    <LogForm type={props.type}></LogForm>
                    </div>
                    <OtherSide></OtherSide>
                </div>
                
            </div>
    );
};

export default Login;