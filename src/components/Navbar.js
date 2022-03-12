import React from "react";
import '../App.css'

const Navbar = ({ brand }) => {
  return (

    <div>
    {/* <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
      </div>
    </nav> */}

    <nav className="menu">
        <label className="logo">{brand}</label>
    </nav>




    </div>
  );
};

export default Navbar;
