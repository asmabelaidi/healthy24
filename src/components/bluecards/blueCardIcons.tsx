import React from 'react'
import BlueCard from './blueCard'

function BlueCardicons() {
  return (
    <div className="container blue-card-icons">
    <div className="row">
        <BlueCard border='right-border-radius'
                  active={false} 
                 img='/assets/images/Group.png'
      
                  content='Online Consultation'
        />

        <BlueCard border='' 
                  active={false} 
                  img='/assets/images/groupe1.jpg'
                  content='Medical advice and second opinions'
        />

        <BlueCard border='' 
                   active={true} 
                   img='/assets/images/reshot-icon-24-hour-support-FHATJ8Q49X 1.png'
                   content='availability 24/7 '
        />

        <BlueCard border='left-border-radius'
                  active={false} 
                  img='/assets/images/reshot-icon-support-ZGKCT2HBNQ 1.png'
                  content='Health education and resources'
        />
      
    </div>
</div>
  )
}

export default BlueCardicons