import React, { useState } from 'react'
import BlueCard from './blueCard'
function BlueCardicons() {
  return (
  <div className="container blue-card-icons">
    <div className="row">
        <BlueCard
                border='right-border-radius'
               
                img='/assets/images/Group.png'
                content='Online Consultation'
        />

        <BlueCard border='' 
                 
                  img='/assets/images/groupe1.jpg'
                  content='Medical advice and second opinions'
        />

        <BlueCard border='' 
                  
                   img='/assets/images/reshot-icon-24-hour-support-FHATJ8Q49X 1.png'
                   content='availability 24/7 '
        />

        <BlueCard border='left-border-radius'
                 
                  img='/assets/images/reshot-icon-support-ZGKCT2HBNQ 1.png'
                  content='Health education and resources'
        />
      
    </div>
  </div>
  )
}

export default BlueCardicons