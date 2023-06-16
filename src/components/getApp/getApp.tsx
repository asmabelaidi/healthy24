import React from 'react'

function GetApp() {
  return (
    <div className="container-fluid get-app-section">
    <div className="row row-get-app">
        <div className="col-sm-12 col-md-12 col-lg-6 pt-5">
            <h1 className="get-app-title m-auto">Get the app</h1>
            <h3 className="get-app-subtitle">Rated 4.9 out of 5 by more than 150k reviewers.</h3>
            <p className="get-app-sub2title">Register in the app and be ready to see a doctor, therapist or psychiatrist
                anytime, anywhere. Available for iPhone and Android.</p>
        </div>
         <div className="col-sm-6 rating-sec">
            <div className="row">
                <div className="col-3">
                    <img className="responsive" src="/assets/images/App Store Logo.png" />
                </div>
                <div className="col-3">
                    <img className="responsive" src="/assets/images/Google Play Logo.png" />
                    <div className="row rating-info">
                        <div className="col-sm-2">
                            <p className="rated-number">4.9</p>
                        </div>
                        <div className="col-sm-10">
                            <p>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star "></span>
                            </p>
                            <p>190.7k Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
  )
}

export default GetApp