import React from 'react'
import PropTypes from 'prop-types'
// import {
//     a
//   } from "react-router-dom";

export default function Navbar(props) {
    // const [mode, setMode] = useState(props.mode)

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mainMode} text-primary`}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.toggleTextColor}`}  href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className={`nav-link active text-${props.toggleTextColor}`}  aria-current="page" href="/home">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className={`nav-link text-${props.toggleTextColor}`} href="/text">Text Machine</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutPage}</a>
                        </li> */}
                    </ul>
                    <div class="form-check form-switch">
                        <input className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label class={`form-check-label  text-${props.toggleTextColor}`} htmlfor="flexSwitchCheckDefault" >{props.toggleText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutPage: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'React Web',
    aboutPage: 'Abdul Ka Pahla React Website'
}