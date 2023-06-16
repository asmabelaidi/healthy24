import BrandName from 'components/brand/brand-name'
import React from 'react'

function Navbar() {
  return (
    //     <nav id="header" className="header d-flex align-items-center fixed-top">
    //     <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

    //       <a href="index.html" className="logo d-flex align-items-center">
    //         {/* <!-- <img src="assets/img/Healthy24.png" alt=""> --> */}
    //         <h1 className="sitename"><span className="text">Healthy24.</span><span><img src="assets/icons/orange-plus.png" /></span></h1>
    //       </a>

    //       <nav id="navbar" className="navbar">
    //         <ul>
    //           <li><a href="index.html">Home</a></li>
    //           <li><a href="single-post.html">About us</a></li>
    //           <li><a href="about.html">Our services</a></li>
    //           <li><a href="contact.html">Contact us</a></li>
    //         </ul>
    //       </nav>

    //       <div className="position-relative">
    //         <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
    //         <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
    //         <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

    //         <a href="#" className="mx-2 js-search-open"><span className="bi-search"></span></a>
    //         <i className="bi bi-list mobile-nav-toggle"></i>

    //         <div className="search-form-wrap js-search-form-wrap">
    //           <form action="search-result.html" className="search-form">
    //             <span className="icon bi-search"></span>
    //             <input type="text" placeholder="Search" className="form-control" />
    //             <button className="btn js-search-close"><span className="bi-x"></span></button>
    //           </form>
    //         </div>

    //       </div>

    //     </div>

    //   </nav>
    <nav className="navbar navbar-light navbar-expand-lg container">
      <div className="container-fluid">
        <a
          className="navbar-brand brand-name"
          href="#"
          style={{ textAlign: 'left' }}
        >
          <BrandName />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        
        >
          {/* <span className="visually-hidden">Toggle navigation</span> */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav nav-list-ul">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center call-info">
            <img
              className="d-xl-flex justify-content-xl-center align-items-xl-center call-info-img"
              src="/assets/icons/36.jpg"
            />
            <div id="info-div">
              <p className="call-info-service">Service disponible</p>
              <p className="call-info-number">
                0453 628 125
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
