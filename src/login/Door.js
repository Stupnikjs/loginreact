import ReactCSSTransitionGroup from 'react-transition-group'


function Door() {


    return ( 
    <div  onMouseOver={openDoor} className="doorframe" tabindex="0">
        <div className="door"></div>
    </div>  
    );
}

export default Door;