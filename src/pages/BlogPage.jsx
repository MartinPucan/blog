import React from "react";
import {articles} from '../data/articles'

function BlogPage() {
  return (<section className="blog-container">
    {articles.map((article, index) => (
      <article key={index}>
        <a>
          <h4>{article.title}</h4>
          <div className="time">{new Date(article.createdAt).getFullYear()}</div>
          <p>{article.body.slice(0, 40) + (article.body.length > 40 ? "..." : "")}</p>
        </a>
      </article>
    ))}
  </section>);
}

export default BlogPage
