import React from 'react';
import moon from "../../public/images/icons/moon.png";
import sun from "../../public/images/icons/sun.png";
import profileImage from "../../public/images/icons/me.jpeg";
import {Link} from "react-router-dom";

type ThemeController = {
  stateChanger: any,
  stateTheme: string
}

const Header = ({stateChanger, stateTheme}: ThemeController) => {
  const switchTheme = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light'
    stateChanger(newTheme)
  }

  return (
    <header className="header">
      <div className="author--wrapper">
        <Link to="/">
          <div className="profile--image">
            <img src={profileImage} alt="Martin Pucan"/>
          </div>
        </Link>
        <div>
          <div className="name"><strong>Martin Pucan</strong></div>
          <div className="profession">Frontend Developer</div>
        </div>
      </div>
      <div className="header--links">
        <Link to="/blog" className="option">
          <>Blog</>
        </Link>
        <Link to="/contact" className="option">
          <>Contact</>
        </Link>
        <Link to="/javascript" className="option">
          <>Javascript</>
        </Link>
      </div>
      <div className="switch-button">
        <button onClick={switchTheme} title="Activate dark mode">
          {
            stateTheme === 'light'
              ? <img src={moon} className="rotate" width={32} alt="dark-mode"/>
              : <img src={sun} className="rotateConversely" width={32} alt="light-mode"/>
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
