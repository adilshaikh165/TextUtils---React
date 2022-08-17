/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>



  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className={`form-check form-check-inline text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.invokeGreenChecks} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineRadio1">Green</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.invokeRedChecks} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineRadio2">Red</label>
      </div>
      <div className={`form-check form-check-inline text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.invokeGreyChecks} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
        <label className="form-check-label" htmlFor="inlineRadio3">Grey</label>
      </div>
      
      <div className={`form-check form-switch text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enter Dark Mode</label>
      </div>

    </div>
  </div>
  
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Title",
    aboutText : "About us !!!"
}
