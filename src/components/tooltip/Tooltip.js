import React,{useState} from 'react'
import './tooltip.css'

export const Tooltip = ({position,content}) => {

  //variable to decide to show/remove tooltip 
  const [showToolTip, setshowToolTip] = useState(false)
  
  //text to be shown as tooltip
  const toolTip = "Click this button to submit"

  //function to toggle tooltip on (mouse hover)/(mouse out)
  const toggleToolTip = ()=>{
    var  timer;
    if(showToolTip===false){      
        timer=setTimeout( ()=>{
            setshowToolTip(true);
        },300)
        return;
    }
    clearInterval(timer);
    setshowToolTip(false);
    return;
  }
 
  // return function
  return (
    <div className='div'>
        {/* button on which tooltip will function 
            when we move mouse over, then toggleToolTip will change value of showToolTip to TRUE
            when we move mouse away, then toggleToolTip will change value of showToolTip to FALSE */}   

        <button onMouseEnter={toggleToolTip} onMouseOut={toggleToolTip} className="btn" >
            {content}            
        </button>
        
        {/* checking value of showToolTip, if true then show div element*/}
        {showToolTip? < div className= {`tooltip ${position}`} > {toolTip} </div> :"" }
    </div>
  )
}
