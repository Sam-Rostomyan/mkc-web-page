import React from "react";
import logo from "../../assets/images/logo.svg";
import "./navbar.scss";

const Navbar = ({ headerRef, visibleSection }) => {

   return (
      <div className="nav-box">
         <nav className="nav" >
            <a href="/#" className="nav__logo">
               <img className="nav__logo_img" src={logo} alt="Logo" />
               <span className="nav__logo_text">Makichyan Consulting</span>
            </a>

            <ul className="nav__list" ref={headerRef}>
               <li>
                  <a href="#home"
                     className={visibleSection === "home" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Գլխավոր
                  </a>
               </li>
               <li>
                  <a href="#about"
                     className={visibleSection === "about" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Մեր մասին
                  </a>
               </li>
               <li>
                  <a href="#services"
                     className={visibleSection === "services" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Ծառայություններ
                  </a>
               </li>
               <li>
                  <a href="#customers"
                     className={visibleSection === "customers" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Հաճախորդներ
                  </a>
               </li>
               <li>
                  <a href="#partners"
                     className={visibleSection === "partners" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Գործընկերներ
                  </a>
               </li>
               <li>
                  <a href="#contact"
                     className={visibleSection === "contact" ? "nav__list_link active" : "nav__list_link"}
                  >
                     Կապ մեզ հետ
                  </a>
               </li>
               <li>
                  <span className="nav__list_lang">AM</span>
               </li>
            </ul>
         </nav>
      </div>
   )
};

export default Navbar;
