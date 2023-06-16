import React from 'react'

function FindDoctors() {
  return (
    <div className="container container-md container-sm pt-5">
    <div className="row row-cols-xs-1 row-cols-md-1 row-cols-lg-2 find-doctor-container">
        <div className="col-md-6 find-doctor">
            <h1>Find The Best doctor you need</h1>
            <p>
                From rashes to colds, stress management to diabetes management, individual treatment plans are
                created around you. Our medical and mental health providers work together, keeping your personal
                journey protected and connected.
            </p>
            <button className="btn btn-outline-primary get-started-btn"> Get started</button>
        </div>
        <div className="col-md-6">
            <img className="img-fluid find-doctor-img" src="/assets/images/find-doctor.png" />
        </div>
    </div>
</div>
  )
}

export default FindDoctors