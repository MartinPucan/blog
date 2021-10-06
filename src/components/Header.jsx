import React from 'react'

function Header() {
  return (
    <header className="header">
        <nav className="nav">
            <div className="nav-item">
                <a href="#about-me">About me</a>
            </div>
            <div className="nav-item">
                <a href="#javascript">Javascript</a>
            </div>
            <div className="nav-item">
              <a href="#css">CSS</a>
            </div>
            <div className="nav-item">
                <a href="#programming">Programming</a>
            </div>
        </nav>
    </header>
  )
}

export default Header