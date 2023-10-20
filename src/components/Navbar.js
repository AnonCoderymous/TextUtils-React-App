import React from 'react';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar({title, mode, toggleMode, text}) {
	return(
		<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
		  <div className="container-fluid">
		    <a className="navbar-brand" href="#!">{title}</a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
		      </ul>
		    </div>
		    <div className={`form-check form-switch text-${(mode==='dark'? 'light':'dark')}`}>
			  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
			  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
			</div>
		  </div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	title: "TextUtils"
}