import React from 'react'
import ChangingText from './ChangingText'
import '../Quickstart/quickstart.css'

const Quickstart = () => {
  return (
    <div className='springbox'>
        <ChangingText className='changing'/>
     <div className='buttons'>
        <button>WHYSPRING</button>
        <button>QUICKSTART</button>
     </div>
    </div>
  )
}

export default Quickstart