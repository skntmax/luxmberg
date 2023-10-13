import React from 'react'

import './../assets/css/hp.css'

function ImageContainer({t1, t2 , src } ) {

     return (
    <div className='image_cont'>
      <div className='img_abs'>
        {t1}  <br /> {t2}
       </div> 
     <img  src={src} style={{
        backgroundColor: "#565656",
        // color: "transparent",
        width:"350px",
        height:"400px",
        textShadow: "0px 2px 3px rgba(255,255,255,0.5)",
    
    }} />
    

    </div>
  )
}

export default ImageContainer