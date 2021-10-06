import React from 'react'

const arr = [1, 5, 3, 6, 2, 9, 200, 4, 10, 40, 50];

const sortArray = arr => arr.sort((a,b) => a - b)

console.log(sortArray(arr))

function Javascript() {
    return (
        <section id="javascript">
            <h2>Javascript</h2>
            <h5>Expressions</h5>
            <ul>
                <li>Nullish coalescing</li>
                <li>Template literal</li>
                <li>Arrow function</li>
                <li>Destructuring</li>
            </ul>
            <h5>Operators</h5>
            <ul>
                <li>Ternary operator</li>
                <li>Binary operator</li>
                <li>Spread operator</li>
            </ul>
            <h5>ES versions</h5>
            <h5>ES versions</h5>
            <h5>Basics</h5>
            <h5>Most usage</h5>
            <h5>Tips && tricks</h5>

            <div>
              <h4>Practice</h4>
              <div className="description">
                <p>Find first and last position of X in sorted array</p>
                <pre>Given array: <code>['2','3','6','6','6','9','10','13','21',]</code> where <code>X</code> is 6.</pre>
              </div>
              <p>solution:</p>

              <div className="description">
                <p>sort method sorting elements alphabetically, for numbers we need improvements.</p>
                <p>
                  <code>const sortArray = arr => arr.sort((a,b) => a - b)</code>
                </p>

              </div>
              <pre>

              </pre>
            </div>
        </section>
    )
}

export default Javascript