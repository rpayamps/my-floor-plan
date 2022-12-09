import Draggable from "react-draggable";
import "./Sqaure.css"

function Sqaure() {
    return (

        <Draggable>
        <div className='sqaure-container'>
        <svg width="400" height="180">
          <rect x="100" y="0" width="100" height="100"/>
            </svg>
        </div>
        </Draggable>
  
    )
}

export default Sqaure