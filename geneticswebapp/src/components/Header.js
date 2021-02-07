import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <section id="home">
      <div className="bg-img">
        <div className="header-wraper">
          <div className="main-info">
            <h1>GEMSOC</h1>
            <Typed
              className="typed-text"
              strings={[
                "Genetics",
                "Molecular",
                "Biology",
                "society",
                "Univerity of Sri jayewardenepura",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <a href="#" className="btn-main-contact">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
