import React from 'react'

const arr = [1, 5, 3, 6, 2, 9, 200, 4, 10, 40, 50];

const sortArray = arr => arr.sort((a,b) => a - b)

function Javascript() {
    return (
        <section id="javascript">
            <h2>Javascript</h2>
            <h3>Links</h3>
            <div className="">
              <p><a href="https://1loc.dev/">One line utilities!</a></p>
            </div>
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
              <div>
                <a href="https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4">JS brief history and ES versions</a>
              </div>
            <h5>Basics</h5>
            <h5>Most usage</h5>
            <h5>Tips && tricks</h5>

            <div>
              <h4>Practice</h4>
            </div>
        </section>
    )
}

export default Javascript
