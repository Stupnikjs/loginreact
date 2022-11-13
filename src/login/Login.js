import React, { useEffect, useState } from 'react';

import LogForm from './LogForm';

import OtherSide from './OtherSide';
import Door from './Door';



const Login = (props) => {
    const [formStage, setFormStage] = useState(0)

    useEffect(() => {
      
    }, [])

    return (  
            <div className='authenticate'>
                <div className='mainSquare'>
                    <div className='logcontainer'>
                    <LogForm setFormStage={setFormStage} type={props.type}></LogForm>
                    </div>
                    <OtherSide className='otherside'>
                        <Door formStage={formStage}></Door>
                    </OtherSide>
                </div>
                
            </div>
    );
};

export default Login;