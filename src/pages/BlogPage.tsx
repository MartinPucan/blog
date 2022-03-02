import React from "react";
import articles from '../data/articles.json'

function BlogPage() {
  function getTruncatedBody(article: { body: string; }, limit: number) {
    return article.body.slice(0, limit) + (article.body.length > limit ? "..." : "")
  }

  return (<section className="blog-container">
    {articles.map((article: string | any, index: number) => (
      <article key={index}>
        <a>
          <h4>{article.title}</h4>
          <div className="time">
            {new Date(article.createdAt).getFullYear()}
          </div>
          <p>{getTruncatedBody(article, 40)}</p>
        </a>
      </article>
    ))}
  </section>);
}

export default BlogPage
