import React from "react";

function Blog() {
  const blogPackage = [
    {
      title: `Frontend developing`,
      content: `Please add content here!`
    },
    {
      title: `AJAX calls tutorial JS`,
      content: `Please add content here!`
    }
  ]

  return (<section className="blog-container">
    {blogPackage.map((article, index) => (
      <article key={index}>
        <a>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </a>
      </article>
    ))}
  </section>);
}

export default Blog