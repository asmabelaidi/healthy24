import React from 'react'

function WhiteCard(props:{title: string, symptoms: string[]}) {
  return (
    <div className="col">
        <div className="card p-4">
            <div className="card-body w-100 d-flex align-items-center">
                <h5 className="card-title mr-auto">{props.title}</h5>
                <img src="/assets/images/were-here-frame.png" alt="Image" className="img-fluid ml-auto" />
            </div>
            <ul>
                {
                    props.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))
                }       
            </ul>
        </div>
    </div>
  )
}

export default WhiteCard