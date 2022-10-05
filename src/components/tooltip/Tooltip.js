import React,{useState} from 'react'
import './tooltip.css'

export const Tooltip = ({position}) => {

  //variable to decide to show/remove tooltip 
  const [showToolTip, setshowToolTip] = useState(false)
  
  //text to be shown as tooltip
  const toolTip = "Click this button to submit"

  //function to toggle tooltip on (mouse hover)/(mouse out)
  const toggleToolTip = ()=>{
    var  timer
    if(showToolTip===false){      
        timer=setTimeout( ()=>{
            setshowToolTip(true)
        },500)
        return
    }
    clearInterval(timer)
    setshowToolTip(false)
    return
  }
 
  // return function
  return (
    <div className='div'>
        <button onMouseOver={toggleToolTip} onMouseOut={toggleToolTip} className="btn" >
            SUBMIT Button            
        </button>
        {showToolTip? < div className= {`tooltip ${position}`} > {toolTip} </div> :"" }
    </div>
  )
}
