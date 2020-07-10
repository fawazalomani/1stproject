import React from "react";
import logo from "./download.jpeg";
import { Link } from "react-router-dom";
import {
    ThemeButton, Logo,
} from "./styles";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Logo to="/">
                    <img src={logo} alt="logo" />


                </Logo>


                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <Link className="nav-item" to="/products" style={{ margin: 10, float: "right" }}>products</Link>

                    <ThemeButton onClick={props.handleToggle}> {props.buttonText}</ThemeButton>
                    <li class="nav-item active">
                    </li>
                    <li className="nav-item">
                    </li>
                    <li classN="nav-item">
                    </li>
                </ul>


            </div>
        </nav>



    );
}



export default NavBar;
