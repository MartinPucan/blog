import React from 'react'

const codeSpecificity = `article { color: pink }
.article { color: red }
.article#article { color: blue }
.article#article.title { color: purple }`


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
          <div>
            <code> {codeSpecificity} </code>
          </div>
        </div>
      </div>
      <h5>Operators</h5>
      <p>

      </p>

    </section>
  )
}

export default CSS