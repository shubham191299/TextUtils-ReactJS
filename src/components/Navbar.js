import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.theme}>
            <div className="container-fluid">
                <img src={process.env.PUBLIC_URL + '/logo192x192.png'} alt='logo' width='25' height='23' className='mx-2'/>
                <a className="navbar-brand" href="#">
                {props.title}
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <button className="btn btn-primary mx-2" onClick={props.chooseColorMode1} style={{backgroundColor: "#588157"}}></button>
                    <button className="btn btn-primary" onClick={props.chooseColorMode2} style={{backgroundColor: "#a3b18a"}}></button>
                    <button className="btn btn-primary mx-2" onClick={props.chooseColorMode3} style={{backgroundColor: "#dad7cd"}}></button>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onChange={props.handlerMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme==='dark'?'Dark Mode':'Light Mode'}</label>
                    </div>
                </div>
            </div>
        </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    about: "About",
    home: "Home",
    theme: "light"
}