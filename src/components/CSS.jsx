import React from 'react'

const entryPrizeMoney = 1000;
const yearAmount = 12 * entryPrizeMoney
const interestRate = .1
const totalAmountsEveryYear = []

// for (let i = 0; i < 12; i++) {
//   let
//
//   totalAmountsEveryYear.map(element => {
//
//   })
//
// }

function CSS() {
  return (
    <section id="css">
      <h2>CSS</h2>
      <h5>Specificity</h5>
      <div className="description mb-7">
        <p>From Highest to lowest specificity magnitude</p>
        <ul>
          <li>Inline style (1000)</li>
          <li>ID (100)</li>
          <li>Class (10)</li>
          <li>Element (1)</li>
        </ul>
        <div>
          <a href="https://polypane.app/css-specificity-calculator">Specificity calculator</a>
        </div>
      </div>
      <h2>Links</h2>
      <div>
        <h3>Bloggers</h3>
        <p><a href="https://www.joshwcomeau.com/css/custom-css-reset/">CSS reset</a></p>
        <p><a href="https://css-tricks.com/a-proof-of-concept-for-making-sass-faster/">A Proof of Concept for Making Sass Faster</a></p>
        <p><a href="https://www.toptal.com/css/sass-mixins-keep-your-stylesheets-dry">Sass mixins keep your stylesheets dry</a></p>
      </div>
    </section>
  )
}

export default CSS