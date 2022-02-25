import React from 'react';
import moon from "../../public/images/icons/moon.png";
import sun from "../../public/images/icons/sun.png";
import {Link} from "react-router-dom";

const Header = ({ stateChanger, stateTheme }) => {
  const switchTheme = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light'
    stateChanger(newTheme)
  }

  return (
    <header className="header">
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
              ? <img src={moon} className="rotate" width={32} alt="dark-mode" />
              : <img src={sun} className="rotateConversely" width={32} alt="light-mode" />
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
