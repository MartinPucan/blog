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
      <div className="description">
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
      <h5>Operators</h5>
      <p>

      </p>

    </section>
  )
}

export default CSS