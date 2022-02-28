import React from 'react'

function Footer() {
  const currentYear = new Date();

  return (
    <footer className="footer">
      <div>© {currentYear.getFullYear()}, Martin Pucan. All rights reserved.</div>
    </footer>
  )
}

export default Footer
