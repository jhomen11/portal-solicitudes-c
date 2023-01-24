import React from "react";
import { Link } from "react-router-dom";
import logofonasa1 from "../img/logofonasa1.svg";
import logofonasa from "../img/logofonasa.png";

function Header() {
  return (
    <>
    <div className="navbar navbar-light pt-4 bg-primary ">
      <div className="container">
        <div className="row">
          <Link to={"/"} className="">
            <img className="logo" src={logofonasa1} alt="" />
            {/* <img src={logofonasa} alt="" /> */}
          </Link>
        </div>
      
        <hr />
      </div>
      </div>
    </>
  );
}
export default Header;


