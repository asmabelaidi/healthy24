import React from 'react'
import WhiteCard from './whiteCard'
function WereHere() {
  return (
    <div className="container-fluid were-here-sec">
    <div className="container-sm container-md pt-5 text-center">
        <h2 className="blue-bold">We're here for you</h2>
        <p>Visits start at $79 for a 15 min consultation, or could be free depending on your insurance. See
            costs for more information.</p>
    </div>
    <div className="container-md container-sm pt-5">
        <div className="row row-cols-xs-1 row-cols-md-1 row-cols-lg-3 g-4">
            <WhiteCard title='Cold & flu' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            <WhiteCard title='Mental health' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            <WhiteCard title='Mental health' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            
        </div>
        <div className="pt-5 row row-cols-xs-1 row-cols-md-1 row-cols-lg-3 g-4">
            <WhiteCard title='Headaches' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            <WhiteCard title='Everyday care' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            <WhiteCard title='Allergies' symptoms= {['Cough', 'Headaches', 'Nausea & vomiting', 'Fever']} />
            
   
        </div>
    </div>

</div>
  )
}

export default WereHere