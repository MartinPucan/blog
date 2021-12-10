import React, {useEffect, useState} from 'react'

function CSS() {
  const [ users, setUsers ] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=2`);
      const { data } = await response.json();
      setUsers(data);
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])


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
        <p><a href="https://www.joshwcomeau.com">Josh Comeau</a></p>
        <h3>Articles</h3>
        <p><a href="https://www.joshwcomeau.com/css/custom-css-reset/">CSS reset</a></p>
        <p><a href="https://css-tricks.com/a-proof-of-concept-for-making-sass-faster/">A Proof of Concept for Making Sass Faster</a></p>
        <p><a href="https://www.toptal.com/css/sass-mixins-keep-your-stylesheets-dry">Sass mixins keep your stylesheets dry</a></p>
      </div>
    </section>
  )
}

export default CSS