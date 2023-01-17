import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
      <div style={{ background: props.mode === 'light' ? props.color.whiteBackground : props.color.DarkBlueBackground, color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}>
        <nav className="navbar navbar-expand-lg" >
          <div className="container-fluid" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}>
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='#' style={{ color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}>TextUtils</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#' style={{ color: props.mode === 'dark' ? props.color.whiteText : props.color.blackText }}>Home</a>
                </li>
              </ul>
              <input type="checkbox" onClick={props.toggleMode} className="btn-check" id="btn-check-outlined" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">{`Enable ${props.mode === "dark" ? 'light' : 'dark'} mode`}</label><br />
            </div>

          </div>
        </nav>
      </div>
    </>
  )
};
