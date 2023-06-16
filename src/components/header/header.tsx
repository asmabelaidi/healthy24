import React from 'react'

function Header() {
  return (
    <div className="container-fluid">
        <header className="row header-img">
            <div className="overlay"></div>
            <div className="col header-col">
                <p className="header-title">Feel Better about Finding<span className="blue-bold"> Healthcare</span></p>
                <p className="header-desc">Healththy 24 Online ranks highest in telehealth satisfaction among
                    direct-to-consumer brands&nbsp;</p><button className="btn btn-primary header-btn" type="button">Get
                    Started</button>
            </div>
            <div className="col"></div>
        </header>
</div>
  )
}

export default Header