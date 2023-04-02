import React, {useContext} from 'react';
import "./NavBar.css"
import {MyContainer} from "../App";

const NavBar = () => {

    const {
        setCarousel
    } = useContext(MyContainer);

    return (
        <>
            <div className="nav-container">
                <ul>
                    <li onClick={() => {
                        setCarousel("carousel1")
                    }}><i className="fa-solid fa-envelope"></i>&nbsp;
                        <span><strong>Coffee? </strong>Marisa Lu</span>
                    </li>
                    <li onClick={() => {
                        setCarousel("carousel2")
                    }}><i className="fa-solid fa-envelope"></i>&nbsp;
                        <span><strong>Feedback </strong>Lindsey Weiss</span>
                    </li>
                    <li onClick={() => {
                        setCarousel("carousel3")
                    }}><i className="fa-solid fa-envelope"></i>&nbsp;
                        <span><strong>Post-grad plans </strong>Evelyn</span>
                    </li>
                    <li onClick={() => {
                        setCarousel("carousel4")
                    }}><i className="fa-brands fa-twitter"
                          style={{color: "#00ccff"}}></i>&nbsp;
                        <span><strong>Launch plan </strong>Dennis Jin</span>
                    </li>
                    <li onClick={() => {
                        setCarousel("carousel5")
                    }}><i className="fa-brands fa-facebook-messenger"
                          style={{color: "#005eff"}}></i>&nbsp;
                        <span><strong>Victoria Wang </strong></span>
                    </li>
                </ul>
            </div>
        </>
    );
};


export default NavBar;
