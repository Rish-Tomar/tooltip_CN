import React,{useState} from 'react'
import './tooltip.css'

export const Tooltip = ({position}) => {

  const [showToolTip, setshowToolTip] = useState(false)

  const toolTip = "hello !! this is a button"

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

  return (
    <div className='div'>
        <button onMouseOver={toggleToolTip} onMouseOut={toggleToolTip} className="btn" >
            SUBMIT Button            
        </button>

        {showToolTip? < div className= {`tooltip ${position}`} > {toolTip} </div> :"" }

    </div>
  )
}
