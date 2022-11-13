import React from 'react';


// animation qui evolue lorsque l'utilisateur rentre un champ 


const OtherSide = (props) => {

    return (
        <div className={props.className}>
            {props.children}
           
        </div>
    );
};

export default OtherSide;