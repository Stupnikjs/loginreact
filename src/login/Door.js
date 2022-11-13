import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



function Door(props) {
    const [className, setClassName] = useState("door")

    useEffect(() => {
        if (props.formStage === 0) setClassName("door") 
        if (props.formStage === 1) setClassName("door stage1") 
        if (props.formStage === 2) setClassName("door stage2") 
        if (props.formStage === 3) setClassName("door stage3")


    }, [props])

    return ( 
    <div  className="doorframe" tabindex="0">
        <div className={className}></div>
    </div>  
    );
}

export default Door;