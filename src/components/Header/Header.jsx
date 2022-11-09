import React, { useEffect, useRef, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.scss";
import {logout, useAuth} from '../../config/firebase'
import logo from '../../assets/all-images/logo/logo.png'

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  }
  
];

const Header = () => {
  const menuRef = useRef(null);
  const currentUser = useAuth()
  const [account,setAccount] = useState(false)

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const emailUser = currentUser?.email
  console.log("user", emailUser)

  useEffect(() => {
    if(emailUser) {
      setAccount(true)

  }
  },[emailUser])
  async function handleLogout() {
    try {
       await logout()
       setAccount(false)
       console.log("success")
      }        
    catch {
        alert("ERROR!")
    }
}

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row className="header__top__mobile">
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 0939.029.037
                </span>
              </div>
              {/* <div className="header__top__left__logo">
              <Link to="/home">
                <img   src={logo} alt="logo" />

              </Link>
              </div> */}
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <div>
                  <i className="ri-user-line"></i> {currentUser?.email}

                </div>
                {
                  account ? 
                  <Link onClick={handleLogout} to="/home" className="logout d-flex align-items-center gap-1 ">
                  <i  className="ri-logout-circle-line "></i> Logout
                  </Link> :
                  <Link to="/sign-in" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                  </Link>

                }
                
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row className=" d-flex align-items-center ">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i className="ri-car-line"></i> */}
                    <img  src={logo} alt="logo" />
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Viet Nam</h4>
                  <h6>Ho Chi Minh City</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
             
            
            </div>
            <div className="login__mobile">
            {
                  account ? 
                  <Link onClick={handleLogout} to="/home" className="logout d-flex align-items-center gap-1 link">
                  <i  className="ri-logout-circle-line "></i> Logout
                  </Link> :
                  <Link to="/sign-in" className=" d-flex align-items-center gap-1 link">
                  <i className="ri-login-circle-line"></i> Login
                  </Link>
            }
            </div>
            

            
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
