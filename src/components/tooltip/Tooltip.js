import React,{useState} from 'react'
import './tooltip.css'

export const Tooltip = ({position,content}) => {

  //variable to decide to show/remove tooltip 
  const [showToolTip, setshowToolTip] = useState(false)
  
  //text to be shown as tooltip and timer
  const toolTip = "Click this button to submit"
  var  timer;

  //function to set  setshowToolTiptoggle to true 
  const toolTipOn = ()=>{    
    if(showToolTip===false){      
        timer=setTimeout( ()=>{
            setshowToolTip(true);
        },300)
        return;
    }
  }
  
  
  //function to set  setshowToolTiptoggle to false
  const toolTipOff = ()=>{
    clearInterval(timer);
    setshowToolTip(false);
  }
 
  // return function
  return (
    <div className='div'>
        {/* button on which tooltip will function 
            when we move mouse over, then toggleToolTip will change value of showToolTip to TRUE
            when we move mouse away, then toggleToolTip will change value of showToolTip to FALSE */}   

        <button onMouseEnter={toolTipOn} onMouseOut={toolTipOff} className="btn" >
            {content}            
        </button>
        
        {/* checking value of showToolTip, if true then show div element*/}
        {showToolTip? < div className= {`tooltip ${position}`} > {toolTip} </div> :"" }
    </div>
  )
}
