import Draggable from "react-draggable";


function Circle() {
return(
    
    <Draggable>
    <div className='circle-container'>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" />
    </svg>  
    </div>
    </Draggable>
)
}


export default Circle;