import React from 'react'
import { NavLink } from "react-router-dom";
function Header({logoutHandler , username , name , role}) {
  const url = 'https://api.dicebear.com/6.x/bottts/svg?seed='+name
  return (
    <>
   <div className="offcanvas-body p-0">
        <div className="sidenav-wrapper">
          <div className="sidenav-profile bg-gradient">
            <div className="sidenav-style1" />
            <div className="user-profile">
              <img src={url} alt="" />
            </div>
            <div className="user-info">
              <h6 className="user-name mb-0">{name}</h6>
              <span>{role}</span>
            </div>
          </div>
          <ul className="sidenav-nav ps-0">
            <li>
              <NavLink to={'/'}>
                <i className="bi bi-house-door" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/macaamiil'}>
                <i className="bi bi-people-fill" /> Macaamiisha
                <span className="badge bg-danger rounded-pill ms-3">220+</span>
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={logoutHandler}>
                <i className="bi bi-box-arrow-right" /> Logout
              </a>
            </li>
          </ul>
          <div className="social-info-wrap">
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="#">
              <i className="bi bi-twitter" />
            </a>
            <a href="#">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="copyright-info">
            <p>
              <span id="copyrightYear" />© Made by <a href="#">Designing World</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header