import BrandText from 'components/brand/text'
import React from 'react'

function WhyChoosing() {
  return (
    <div className="container">
    <div className="row pt-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 why-choosing-img">
            <img className="img-fluid" src="/assets/images/sec-3.png" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 why-choosing">
            <h1>Why choosing <BrandText /></h1>
            <p>
                With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical
                experts, care is always available, anytime and anywhere. Select and see your favorite providers
                again and again, right from your smartphone, tablet or computer.
                <br /> <br />
                <span>
                    Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health
                    plan or employer. It’s free to sign up and easy to check your coverage when you register
                </span>
            </p>
        </div>
    </div>
</div>
  )
}

export default WhyChoosing