import React from 'react'

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-row">

        <div className="testimonial-white-card">
          <div className="testimonial-frame">
            <div className="testimonial">Testimonial
              <div className="testimonial-line"></div>
            </div>
            <div className="testimonial-title">You're in safe hands</div>
            <img className="testimonial-stars" alt="" src="/assets/images/stars.svg" />

            <div className="testimonial-comment">
              <div className="testimonial-comment-text">
                Our caring and supportive team has experience working with
                patients face-to-face and dealing with mental health issues.
                Spend less time searching for help and more time connecting
                with someone you can trust.
              </div>
              <div className="testimonial-author">
                <img className="testimonial-author-image" alt="" src="/assets/images/author.png" />

                <div className="testimonial-author-name">Christopher Nolan</div>
                <div className="testimonial-author-title">Our client</div>
              </div>
            </div>
          </div>

          <img src="/assets/icons/left-arrow.svg" alt="" className="testimonial-left-arrow" />
          <img src="/assets/icons/right-arrow.svg" alt="" className="testimonial-right-arrow" />

        </div>
      </div>
    </div>
  )
}
