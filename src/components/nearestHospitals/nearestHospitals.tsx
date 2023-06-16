import React from 'react'
import RatingStars from './ratingStars'

function NearestHospitals() {
  return (
    <main id="main">
    <div className="card hospital-card">
      <div className="card-body">
        <div className="row">
          <div className="image-box col-md-6">
            <div className="image-container">
            <img className="hospital-img" src="/assets/images/hospital-image.jpeg" alt="hospital" />
            <div className="evaluation">
              <div className="evaluation-content">
                <span className="icon">
                  <img src="assets/icons/evaluation.png" alt="Evaluation" />
                </span>
                <span className="text">
                  <span className="title">
                    Quality over Quantity
                  </span>
                  <RatingStars />
                  {/* <span className="stars">
                    <img src="assets/icons/star.png" />
                    <img src="assets/icons/star.png" />
                    <img src="assets/icons/star.png" />
                    <img src="assets/icons/star.png" />
                  </span> */}
                </span>
              </div>
            </div>
            </div>
          </div>
          <div className="text-box col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Search the Nearest hospital from you</h5>
                <p className="card-text">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <a href="#" className="btn btn-primary search-btn">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default NearestHospitals