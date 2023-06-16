import BrandText from 'components/brand/text'
import React from 'react'

function About() {
  return (
    <div className="container">
    <div className="row pt-5">
        <div className="col-md-12 col-lg-9 about-healthy">
            <h1>About <BrandText /> </h1>
            <p>
                With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical
                experts, care is always available, anytime and anywhere. Select and see your favorite providers
                again and again, right from your smartphone, tablet or computer.
            </p>
            <p>
                Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health plan
                or employer. It’s free to sign up and easy to check your coverage when you register.
            </p>

        </div>
        <div className="col-md-12 col-lg-3">
            <div className="healthy-image-box">
                <img src="/assets/images/about-image.png" className="about-img" />
                <div className="filled-logo">
                    <span className='white-brand-name'>Health24</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About