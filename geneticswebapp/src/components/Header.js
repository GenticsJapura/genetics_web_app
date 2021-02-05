import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Gen society </h1>
                <Typed
                    className="typed-text"
                    strings={["Genetics","Biology","USJ"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-contact">Contact us</a>
            </div>
        </div>
    )
}

export default Header;
